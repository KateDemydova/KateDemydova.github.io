import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types/Post.interface";
import PostItem from "./PostItem";
import './DataFetcher.css';
import {toast} from "react-toastify";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import AutoTimer from "./AutoTimer";



const DataFetcher: React.FC = () => {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [id, setId] = useState<number>(1);


    useEffect(() => {
        const controller = new AbortController();
        let isActive = true;

        const fetchData = async (): Promise<void> => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    signal: controller.signal,
                });

                if (isActive) {
                    setData(response.data);
                }
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.code === "ERR_CANCELED") return;

                    if (isActive) {
                        setError(
                            err.response?.data?.message || `Помилка: ${err.message} (код: ${err.response?.status || "невідомий"})`
                        );
                    }
                } else if (isActive) {
                    setError("Невідома помилка");
                }
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isActive = false;
            controller.abort();
        };
    }, [id]);

    return (
        <div className="data-container">
            <h2>Пост {id}</h2>
            <button
                className="button"
                onClick={() => {
                    const nextId = id < 100 ? id + 1 : 1;
                    toast(`Завантаження #${nextId}...`);

                    setTimeout(() => {
                        setId(nextId);
                    }, 600);
                }}
                disabled={loading}
            >
                <div>
                    {loading ? "Завантаження..." : "Завантажити наступний пост"}

                    <IoArrowForwardCircleOutline
                        className="icon-pulse"
                        style={{ marginLeft: '8px' }}
                    />
                </div>
            </button>

            {error && <p className="error" role="alert">{error}</p>}
            {data && <PostItem post={data} />}
            {!loading && data && (
                <AutoTimer
                    seconds={6}
                    keyDependency={data.id}
                    onExpire={() => {
                        const nextId = id < 100 ? id + 1 : 1;
                        setId(nextId);
                    }}
                />
            )}
                </div>
    );
};

export default DataFetcher;

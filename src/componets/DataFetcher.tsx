import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types/Post.interface";
import PostItem from "./PostItem";
import './DataFetcher.css';

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
                onClick={() => setId((prev) => (prev < 100 ? prev + 1 : 1))}
                disabled={loading}
            >
                {loading ? "Завантаження..." : "Завантажити наступний пост"}
            </button>

            {loading && <p className="loading" aria-live="polite">Завантаження...</p>}
            {error && <p className="error" role="alert">{error}</p>}
            {data && <PostItem post={data} />}
        </div>
    );
};

export default DataFetcher;

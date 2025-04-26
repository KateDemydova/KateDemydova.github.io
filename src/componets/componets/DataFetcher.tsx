import {useEffect, useRef,useState} from "react";
import axios from "axios";
import { Post } from "../types/Post.interface";
import PostItem from "./PostItem";
import './DataFetcher.css';
import {toast, ToastContainer} from "react-toastify";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {useIdleTimer} from "react-idle-timer";
import { Id } from "react-toastify";



const DataFetcher: React.FC = () => {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [id, setId] = useState<number>(1);

    const [autoEnabled, setAutoEnabled] = useState<boolean>(true);
    const notifiedPostIdRef = useRef<number | null>(null);
    const toastIdRef = useRef<Id | null>(null);


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

    const handleOnIdle = () => {
        if (!autoEnabled) return;

        const nextId = id < 100 ? id + 1 : 1;

        if (notifiedPostIdRef.current === nextId) {
            return;
        }
        setId(nextId);
        notifiedPostIdRef.current = nextId;

        setTimeout(() => {
            if (toastIdRef.current !== null && toast.isActive(toastIdRef.current)) {
                toast.update(toastIdRef.current, {
                    render: `Перехід на пост #${nextId}`,
                    autoClose: 2000,
                    closeButton: true,
                    draggable: true,
                    type: 'info',
                    isLoading: false,
                });
            } else {
                toastIdRef.current = toast.info(`Перехід на пост #${nextId}`, {
                    autoClose: 2000,
                    closeOnClick: true,
                    draggable: true,
                    closeButton: true,
                    onClose: () => {
                        toastIdRef.current = null;
                    }
                });
            }
        }, 100);
    };

    useIdleTimer({
        timeout: 5000,
        onIdle: handleOnIdle,
    });

    const toggleAuto = () => {
        setAutoEnabled((prev) => !prev);
        toast[autoEnabled ? 'warn' : 'success'](
            autoEnabled ? 'Автоперехід вимкнено' : 'Автоперехід вімкнено'
        );
    };

    return (
        <div className="data-container">
            <h2>Пост {id}</h2>
            <button
                className="button"
                onClick={() => {
                    const nextId = id < 100 ? id + 1 : 1;
                    setId(nextId);
                    toast.info(`Завантаження #${nextId}...`, { autoClose: 3000 });

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

            <div className="auto-settings">

                <button className="auto-switch" onClick={toggleAuto}>
                    {autoEnabled ? 'Вимкнути автоперехід?' : 'Увімкнути автоперехід?'}
                </button>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                closeButton
                pauseOnFocusLoss
            />
        </div>
    );
};

export default DataFetcher;

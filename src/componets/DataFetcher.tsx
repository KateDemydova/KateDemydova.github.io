import { useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import PostItem from "./PostItem";
import useFetchPost from "../hooks/useFetchPost";
import usePostToast from "../hooks/usePostToast";
import useAutoSwitchToast from "../hooks/useAutoSwitchToast";
import "./DataFetcher.css";

const IDLE_TIMEOUT = 3000;

const DataFetcher: React.FC = () => {
    const [id, setId] = useState<number>(1);
    const [autoEnabled, setAutoEnabled] = useState<boolean>(true);

    const { data, error, loading } = useFetchPost(id);

    usePostToast(data);
    useAutoSwitchToast(autoEnabled);

    const { reset } = useIdleTimer({
        timeout: IDLE_TIMEOUT,
        onIdle: () => {
            if (autoEnabled) {
                nextPost();
            }
        },
    });

    const nextPost = () => {
        setId(prev => (prev < 100 ? prev + 1 : 1));
        reset();
    };

    const handleManualNext = () => {
        nextPost();
    };

    const toggleAuto = () => {
        setAutoEnabled(prev => !prev);
    };

    return (
        <div className="data-container">
            <h2>Пост {id}</h2>

            <button className="button" onClick={handleManualNext} disabled={loading}>
                <div>
                    {loading ? "Завантаження..." : "Завантажити наступний пост"}
                    <IoArrowForwardCircleOutline className="icon-pulse" style={{ marginLeft: "8px" }} />
                </div>
            </button>

            {error && <p className="error">{error}</p>}
            {data && <PostItem post={data} />}

            <div className="auto-settings">
                <button className="auto-switch" onClick={toggleAuto}>
                    {autoEnabled ? "Вимкнути автоперехід?" : "Увімкнути автоперехід?"}
                </button>
            </div>
        </div>
    );
};

export default DataFetcher;

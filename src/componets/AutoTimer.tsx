import { useEffect, useState } from "react";

interface AutoTimerProps {
    seconds: number;
    onExpire: () => void;
    keyDependency?: number | string;
}

const AutoTimer: React.FC<AutoTimerProps> = ({ seconds, onExpire, keyDependency }) => {
    const [count, setCount] = useState(seconds);

    useEffect(() => {
        setCount(seconds);
    }, [keyDependency]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [keyDependency]);

    useEffect(() => {
        if (count <= 0) {
            onExpire();
        }
    }, [count, onExpire]);

    return (
        <div className="auto-timer">
            Автопереход через: {count} сек.
        </div>
    );
};

export default AutoTimer;
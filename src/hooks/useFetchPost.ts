import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types/Post.interface";

const useFetchPost = (id: number) => {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        let active = true;

        const fetchPost = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    signal: controller.signal,
                });
                if (active) setData(response.data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.code !== "ERR_CANCELED" && active) {
                        setError(err.message);
                    }
                } else if (active) {
                    setError("Неизвестная ошибка");
                }
            } finally {
                if (active) setLoading(false);
            }
        };

        fetchPost();

        return () => {
            active = false;
            controller.abort();
        };
    }, [id]);

    return { data, loading, error };
};

export default useFetchPost;
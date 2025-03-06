import {useEffect, useState} from "react";
import "./PostsList.css"

interface Post {
    id: number;
    title: string;
    body: string;
}

function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) throw new Error("Помилка завантаження даних");
                setPosts(await response.json());
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    if (loading) return <p className="loading">Завантаження...</p>;
    if (error) return <p className="error">Помилка: {error}</p>;

    return (
        <div className="posts-container">
            <h2 className="posts-title">Список постів</h2>
            <ul className="posts-list">
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id} className="post-item">
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;
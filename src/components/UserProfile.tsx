import { useEffect, useState } from 'react';

interface UserProfile {
    name: string;
    email: string;
    username: string;
}

function UserProfile() {
    const [data, setData] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


useEffect(() => {
const fetchData = async () => {
    try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        if(!response.ok) {
            throw new Error(`Помилка: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
    } catch (err: any) {
        setError(err.message || 'Невідома помилка');
        console.log('Помилка при отриманні даних', err);
    } finally {
        setLoading(false);
    }
};

    fetchData();
}, []);

if (loading) return <div>Завантаження...</div>;
if (error) return <div>Помилка завантаження: {error}</div>;


        return (
        <div>
            <h1>Дані:</h1>
            <ul>
                <li><strong>Ім'я:</strong> {data?.name}</li>
                <li><strong>Email:</strong> {data?.email}</li>
                <li><strong>UserName:</strong> {data?.username}</li>
            </ul>
        </div>
        );
}

export default UserProfile;



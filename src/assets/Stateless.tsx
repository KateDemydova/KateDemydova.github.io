import { useState } from "react";
import "./Stateless.css";

interface User {
    id: number;
    name: string;
    age: number;
}

interface UserStateListProps {
    users: User[];
}

const UserStateList: React.FC<UserStateListProps> = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="user-list-container">
            <h1 className="title">Перелік користувачів</h1>
            <input
                type="text"
                placeholder="Пошук користувачів"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="user-list">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <li key={user.id} className="user-item">
                            <span className="user-name">{user.name}</span>
                            <span className="user-age">{user.age} років</span>
                        </li>
                    ))
                ) : (
                    <p className="no-users">Користувачів не знайдено</p>
                )}
            </ul>
        </div>
    );
};

export default UserStateList;

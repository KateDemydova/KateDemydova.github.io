import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const GrandChildComponent = () => {
    const { users, addUser, removeUser } = useAppContext();
    const [name, setName] = useState('');

    return (
        <div>
            <h4>Grandchild Component</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}
                    <button className="remove" onClick={() => removeUser(user.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                if (name.trim()) {
                    addUser(name.trim());
                    setName('');
                }
            }}>
                Add User
            </button>
        </div>
    );
};

export default GrandChildComponent;

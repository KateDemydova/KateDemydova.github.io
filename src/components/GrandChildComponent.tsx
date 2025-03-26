import {useState} from "react";
import { useAppSelector, useAppDispatch } from '../redux/hook'
import { addUser, removeUser } from "../redux/userSlice";
import { selectUsers } from "../redux/userSelectors";

const GrandChildComponent = () => {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    return (
        <div>
            <h4>Grandchild Component</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}
                        <button className="remove" onClick={() => dispatch(removeUser(user.id))}>
                            Remove
                        </button>
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
                    dispatch(addUser(name.trim()));
                    setName('');
                }
            }}>
                Add User
            </button>
        </div>
    );
};

export default GrandChildComponent;

import { NavLink } from 'react-router-dom';

export default function Sidebar ({searchTerm, setSearchTerm}: {
    searchTerm: string, setSearchTerm: (value: string) => void;
}) {
    return (
            <div className="sidebar-buttons">
                <NavLink to="/" className={({ isActive }) =>`action-button ${isActive ? 'active' : ''}`
                }>На головну</NavLink>
                <NavLink
                    to="/addclient"
                    className={({ isActive }) =>
                        `action-button ${isActive ? 'active' : ''}`
                    }
                >
                    Додати нового клієнта
                </NavLink>
                <NavLink
                    to="/payments"
                    className={({ isActive }) =>
                        `action-button ${isActive ? 'active' : ''}`
                    }
                >
                    Список оплат
                </NavLink>

            <form onSubmit={(e) => e.preventDefault()}>
                <input
                type="text"
                placeholder="Пошук клієнта за ім'ям"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-search"
                />
            </form>
        </div>
);
}

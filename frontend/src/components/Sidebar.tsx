import {NavLink} from "react-router-dom";

export default function Sidebar({
                                    searchTerm,
                                    setSearchTerm,
                                }: {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}) {
    return (
        <div className="sidebar-buttons">
            <NavLink to="/" className={({isActive}) => isActive ? "action-button active" : "action-button"}>
                На головну
            </NavLink>
            <NavLink to="/addclient" className={({isActive}) => isActive ? "action-button active" : "action-button"}>
                Додати нового клієнта
            </NavLink>
            <NavLink to="/payments" className={({isActive}) => isActive ? "action-button active" : "action-button"}>
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

            <NavLink
                to="faq"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
                FAQ
            </NavLink>
        </div>
    );
}
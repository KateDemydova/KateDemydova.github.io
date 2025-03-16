import {NavLink} from "react-router";
import {routes} from "../config/router.config";
import "../index.css"



const Menu = () => {
    return (
        <nav>
            <ul>
                {routes.map(({path, label}) => (
                    <li key={path}>
                        <NavLink to={path}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;
import { NavLink, Outlet} from "react-router";
import "../index.css"


const Gallery = () => {
    return (<div>
            <h1>Gallery</h1>
            <nav className="fotobooks">
                <ul>
                    <li><NavLink to="fotobook1" className={({ isActive }) => (isActive ? "active" : "")}>Fotobook1</NavLink></li>
                    <li><NavLink to="fotobook2" className={({ isActive }) => (isActive ? "active" : "")}>Fotobook2</NavLink></li>
                </ul>
            </nav>
            <Outlet />
    </div>
    )
};

export default Gallery;
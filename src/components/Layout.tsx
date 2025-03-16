
import Menu from "./Menu.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";

const Layout = () => (
    <>
        <Menu />
        <Outlet />
        <Footer />
    </>
)

export default Layout;
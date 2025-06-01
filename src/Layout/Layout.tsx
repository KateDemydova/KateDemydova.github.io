import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar.tsx";

export default function Layout() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="client-page">
            <Sidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Outlet context={{searchTerm}} />
        </div>
    )
}
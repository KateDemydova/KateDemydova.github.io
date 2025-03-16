import {ComponentType} from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Gallery from "../components/Gallery";
import Fotobook1 from "../components/Fotobook1";
import Fotobook2 from "../components/Fotobook2";


interface Route {
    path: string;
    label: string;
    Component: ComponentType;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/',
        label: 'Home',
        Component: Home
    },
    {
        path: '/about',
        label: 'About',
        Component: About
    },
    {
        path: '/gallery',
        label: 'Gallery',
        Component: Gallery,
        children: [
            {
                path: 'fotobook1',
                label: 'Fotobook1',
                Component: Fotobook1
            },
            {
                path: 'fotobook2',
                label: 'Fotobook2',
                Component: Fotobook2
            },
        ]
    },
    {
        path: '/contacts',
        label: 'Contacts',
        Component: Contacts
    },
    ]


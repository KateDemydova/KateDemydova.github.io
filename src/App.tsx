import { RouterProvider, createBrowserRouter} from "react-router";
import NotFound from "./components/NotFound"
import Layout from "./components/Layout";
import {routes} from "./config/router.config";
import "./index.css"



const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            ...routes.map(({path, Component, children}) => ({
                path,
                    element: <Component />,
                children: children?.map(({path, Component}) => ({
                    path,
                    element: <Component />
                })),
            }))
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
])


function App() {

    return (
        <RouterProvider router={router} />
        // <BrowserRouter>
        //     <Menu />
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/contacts" element={<Contacts />} />
        //         <Route path="*" element={<NotFound />} />
        //     </Routes>
        // </BrowserRouter>
    )
}
export default App

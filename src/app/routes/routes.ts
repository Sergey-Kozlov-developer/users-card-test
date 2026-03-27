import {createBrowserRouter} from "react-router";
import Layout from "@app/layout/Layout.tsx";
import {Home} from "@pages/home";
import {Profile} from "@pages/profile";


export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/profile',
                Component: Profile
            }
        ]
    }
])
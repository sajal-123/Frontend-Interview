import { type RouteObject } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from './pages/Home'

export const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },

            { path: "/profile", element: <Profile /> },
        ],
    },

    { path: "*", element: <NotFound /> },
];

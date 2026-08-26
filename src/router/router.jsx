import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import Genres from "@/pages/Genres";
import Favorites from "@/pages/Favorites";
import WatchLater from "@/pages/WatchLater";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/movies", element: <Movies /> },
            { path: "/genres", element: <Genres /> },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/watch-later",
                element: <WatchLater />,
            },
        ],
    },
]);

export default router;

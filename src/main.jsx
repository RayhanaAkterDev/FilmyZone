import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { ThemeInit } from "../.flowbite-react/init";

import router from "@/router/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <>
        <ThemeInit />
        <RouterProvider router={router} />
    </>
);

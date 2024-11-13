import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamesList from "./GamesList";
import News from "./News";
import ContactUs from "./ContactUs";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/GamesList", element: <GamesList /> },
    { path: "/News", element: <News /> },
    { path: "/ContactUs", element: <ContactUs /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
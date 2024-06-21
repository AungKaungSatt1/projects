import { useEffect, useState, createContext, useContext } from "react";
import "../style/Template.css";

import App from "../App";

export const AppContext = createContext();

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Product from "../pages/Product";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/product',
                element: <Product />,
            }
        ]
    }
]);

export default function ThemedApp() {
    const { mode, setMode } = useState('dark');
    return (
        <AppContext.Provider value={{ mode, setMode }}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    )
}
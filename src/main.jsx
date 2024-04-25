import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx"
import ProductList from "./components/ProductList.jsx";
import About from "./components/About.jsx";
import LogIn from "./components/LogIn.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                element: <Home/>,
                index: true
            },
            {
                path: "products",
                element: <ProductList/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "login",
                element: <LogIn/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

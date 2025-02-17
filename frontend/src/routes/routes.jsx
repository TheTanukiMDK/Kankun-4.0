import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    }
])
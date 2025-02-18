import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/Login",
        element: <Login></Login>
    },

])
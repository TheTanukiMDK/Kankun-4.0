import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/publicPages/Home"
import Login from "../pages/publicPages/Login"
import Registro from "../pages/publicPages/Registro"
import RecuperarContra from "../pages/publicPages/RecuperarContra";
import Dashboard from "../pages/privatePages/Dashboard";



export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/Login",
        element: <Login></Login>
    },
    {
        path: "/Registro",
        element: <Registro></Registro>
    },
    {
        path: "/RecuperarContra",
        element: <RecuperarContra></RecuperarContra>
    },

    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    },

])
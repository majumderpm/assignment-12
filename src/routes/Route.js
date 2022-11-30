import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../login/Login";
import Admin from "../pages/admin/Admin";
import Home from "../pages/home/Home";
import Register from "../register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;

import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Home from "../pages/pages/Home";
import ConnectBook from "../BookSection/ConnectBook";
import Login from "../components/Login";
import Register from "../components/Register";
import SingleBook from "../BookSection/SingleBook";
import Order from "../BookSection/Order";
import PrivateRouter from "./PrivateRouter";
import AdminRoutes from "./AdminRoutes";
import AdminLogin from "../components/AdminLogin";
import { Dashboard } from "../pages/pages/Dashboard/Dashboard";
import ManageBooks from "../pages/pages/Dashboard/ManageBooks";
import AddNewBook from "../pages/pages/Dashboard/AddNewBook";
import EditBook from "../pages/pages/Dashboard/EditBook";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/book",
                element: <ConnectBook />
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            },
            {
                path: "/orders",
                element: <PrivateRouter><Order /></PrivateRouter>,
            }

        ],
    },
    {
        path: '/admin',
        element: <AdminLogin/>
    },
    {
        path: '/dashboard',
        element: <AdminRoutes><Dashboard/></AdminRoutes>,
        children: [
            {
                path: "add-new-book",
                element: <AdminRoutes><AddNewBook/></AdminRoutes>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoutes><EditBook/></AdminRoutes>
            },
            {
                path: "manage-book",
                element: <AdminRoutes><ManageBooks/></AdminRoutes>
            },


        ]
    }
]);

export default router;
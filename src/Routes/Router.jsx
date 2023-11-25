import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Menu from "../Components/Menu/Menu";
import OurShop from "../Components/OurShop/OurShop";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/signUp";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../Components/Cart/Cart";
import DashBoard from "../Main/DashBoard/DashBoard";
import AllUsers from "../Components/AllUsers/AllUsers";
import AddItems from "../Components/AddItems/AddItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/shop',
                element: <OurShop />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },

        ]

    },
    {
        path: '/dashBoard',
        element: <PrivateRoutes> <DashBoard/> </PrivateRoutes>,
        children: [
            {
                path:'/dashBoard/cart',
                element: <Cart/>
            },
            {
                path:'/dashBoard/users',
                element: <AllUsers/>
            },
            {
                path:'/dashBoard/addItems',
                element: <AddItems/>
            },
        ]
    }
]);
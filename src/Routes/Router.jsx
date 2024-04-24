import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../layout/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Men_Items from "../pages/Men/Men_Items";
import Women_Items from "../pages/Women/Women_Items";
import ItemDetails from "../pages/itemDetails/ItemDetails";
import WomenItemsDetails from "../pages/itemDetails/Women/WomenItemsDetails";
import Kids_Items from "../pages/Children/Kids_Items";
import KidsItemsDetails from "../pages/itemDetails/kids/KidsItemsDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/men",
                element: <Men_Items></Men_Items>
            },
            {
                path: "/women",
                element: <Women_Items></Women_Items>
            },
            {
                path: "/kids",
                element: <Kids_Items></Kids_Items>
            },
            {
                path: '/itemDetails/:id',
                element: <ItemDetails></ItemDetails>
            },
            {
                path: '/WomenItemsDetails/:id',
                element: <WomenItemsDetails></WomenItemsDetails>
            },
            {
                path: '/KidsItemsDetails/:id',
                element: <KidsItemsDetails></KidsItemsDetails>
            }
        ]
    },
]);
export default Router;
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path:'/home',
            element: <Home></Home>,
        },
        {
            path:'/',
            element: <Home></Home>,
        }
    ]
}])
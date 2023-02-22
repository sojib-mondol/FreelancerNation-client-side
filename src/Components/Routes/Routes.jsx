import { createBrowserRouter } from "react-router-dom";
import BecomeASeller from "../BecomeASeller/BecomeASeller";
import Home from "../Home/Home/Home";
import Login from "../JoinForm/Login";
import Main from "../Layout/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/becomeASeller',
            element: <BecomeASeller></BecomeASeller>,
        },
        {
            path:'/login',
            element: <Login></Login>
        },

    ]
}])
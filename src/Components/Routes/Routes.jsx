import { createBrowserRouter } from "react-router-dom";
import BecomeASeller from "../BecomeASeller/BecomeASeller";
import Error from "../Error/Error";
import Home from "../Home/Home/Home";
import JoinForm from "../JoinForm/JoinForm";
import Main from "../Layout/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
            path:'/join',
            element: <JoinForm></JoinForm>,
        },

    ]
}])
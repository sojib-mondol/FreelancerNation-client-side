import { createBrowserRouter } from "react-router-dom";
import BecomeASeller from "../BecomeASeller/BecomeASeller";
import Error from "../Error/Error";
import ExploreService from "../ExploreServices/ExploreService";
import Home from "../Home/Home/Home";
import Login from "../JoinForm/Login";
import Main from "../Layout/Main";
import Registration from "../Registration/Registration";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/becomeASeller',
            element: <BecomeASeller></BecomeASeller>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {

            path:'/becomeASeller/service_category',
            element: <ExploreService></ExploreService>,
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }


    ]
}])
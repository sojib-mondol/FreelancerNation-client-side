import { createBrowserRouter } from "react-router-dom";
import BecomeASeller from "../BecomeASeller/BecomeASeller";
import Home from "../Home/Home/Home";
import JoinForm from "../JoinForm/JoinForm";
import Main from "../Layout/Main";
import Registration from "../Registration/Registration";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
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
            path: '/join',
            element: <JoinForm></JoinForm>,
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }

    ]
}])
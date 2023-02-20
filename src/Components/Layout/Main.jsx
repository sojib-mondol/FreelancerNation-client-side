import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/NavBar/Navbar';
import SubFooter from '../Shared/SubFooter/SubFooter';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <SubFooter></SubFooter>
        </div>
    );
};

export default Main;
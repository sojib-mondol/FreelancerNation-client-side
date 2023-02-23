import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/NavBar/Navbar';
import SubFooter from '../Shared/SubFooter/SubFooter';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer/>
            <SubFooter></SubFooter>
        </div>
    );
};

export default Main;
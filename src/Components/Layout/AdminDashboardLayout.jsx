import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../API/UseAdmin';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from '../Shared/NavBar/Navbar';

const AdminDashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email);

    // console.log(user);
    console.log(isAdmin);
    // if (isSellerLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">


                        {/* admin only */}
                        {
                            isAdmin && 
                            <>
                                <li
                                    className='text-white  bg-gray-500  md:bg-gray-900 mb-2 rounded-lg'>
                                    <Link to='/dashboard/allSellers'>All Sellers</Link>
                                </li>
                                <li
                                    className='text-white  bg-gray-500 md:bg-gray-900 mb-2 rounded-lg'>
                                    <Link to='/dashboard/allBuyers'>All Buyers</Link>

                                </li>

                                <label htmlFor="dashboard-drawer" className="lg:hidden btn btn-info text-base-content">Close drawer</label>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
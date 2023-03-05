import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AdminSkeleton from '../Shared/Skeleton/AdminSkeleton';



const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/allSellers`)
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })



    const handleDeletingSeller = _id => {

        const agree = window.confirm('Are you sure delete this buyer !!!')

        if (agree) {
            // console.log(_id);
            fetch(`http://localhost:5000/users/delete/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`Seller deleted successfully`)
                        refetch();
                    }

                })

        }


    };




    if (isLoading) {
        return <AdminSkeleton></AdminSkeleton>
    }

    if (!sellers.length) {
        return <div className='p-4 mt-6'>
            <h1 className='text-3xl text-yellow-500'>No Sellers available.
            </h1>
        </div>
    }



    return (
        <div className='mt-3'>
            <h2 className="text-3xl font-semibold ml-8 mb-4">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-lg">
                                                <img src={seller.image} alt='' />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        <Link to={`/dashboard/seller/details/${seller?._id}`}>
                                            <button className="btn btn-sm btn-success text-white">Details</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <label
                                            onClick={() => handleDeletingSeller(seller._id)}
                                            className="btn btn-sm btn-error text-white">Delete</label>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoginSkeleton from '../Shared/Skeleton/LoginSkeleton';
import Gigcard from './Gigcard';

const ShowGigs = () => {

    const {data: gigs = [], isLoading, refetch} = useQuery({
        queryKey: ['gigs'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sellerGigAll');
            const data = await res.json();
            return data;
        }
    });

    if(isLoading) {
        return <LoginSkeleton></LoginSkeleton>
    }
    
    return (
        <div>
            <h2 className='text-2xl mt-10 mb-10 font-bold px-10'>All Gigs are here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 mt-10'>
            {
                gigs && gigs?.map((g, i) => <Gigcard
                    gig = {g}
                    key = {i}
                ></Gigcard>)
            }
        </div>
        </div>
    );
};

export default ShowGigs;
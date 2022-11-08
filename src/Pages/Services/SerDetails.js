import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SerDetails = () => {
    const{title, price, about, rating, img} = useLoaderData();
    return (
        <div className='container m-auto'>
            <div className=''>
                <div className='w-9/12 m-auto '>
                <h1 className='text-4xl font-bold my-10 text-center'>Service Details</h1>
                    <div>
                        <div className='my-10'>
                            <div className="card lg:card-side backdrop-blur-sm bg-white/30 shadow-3xl">
                            <figure className='w-96 pl-5'><img src={img} alt="Album"/></figure>
                            <div className="card-body w-1/2">
                                <div>
                                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                                    <p>{about}</p>
                                </div>
                                <p className='text-lg font-semibold'>Ratings: {rating}</p>
                                <p className='text-lg font-semibold'>Price: {price}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SerDetails;
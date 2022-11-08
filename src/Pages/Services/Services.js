import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div>
            <h1 className='text-4xl font-bold my-10 text-center'>My Services: {cards.length}</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10'>
                {
                    cards.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
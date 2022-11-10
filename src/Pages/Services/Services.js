import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const cards = useLoaderData()
    useTitle('Services');
    console.log(cards)
    return (
        <div className='container m-auto'>
            <h1 className='text-4xl font-bold my-10 text-center'>Services: {cards.length}</h1>
            <div className=''>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;
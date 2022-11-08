import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, price, title, about} = service;
    return (
        <div>
            <div className="card w-96 backdrop-blur-sm bg-white/30 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}</p>
                    <p>{about.slice(0, 100) + '...'} <Link to={`/services/${_id}`}>Read More</Link></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
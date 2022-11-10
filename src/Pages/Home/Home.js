import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faComments, faHandshake, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import games from '../../assets/games.jpg'
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    
    const [showServices, setShowServices] = useState([]);

    useTitle('Home');
    
    useEffect( () =>{
        fetch(`https://goodman-gaming-server.vercel.app/services`)
        .then(res =>res.json())
        .then(data => setShowServices(data))
        console.log(showServices)
    }, []);


    return (
        <div className=''>
            <Banner></Banner>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold my-10 text-center'>Fastest | Cheapest | Safest</h1>
                <p>Best Platform to Buy In-Game Currency services & Top Up Your Favourite Games from me!!!</p>
                <button className='btn btn-info mt-5 shadow-lg shadow-cyan-500/50'><Link to='/services'>Buy Now</Link></button>
            </div>

            <div className=''>
                <h1 className='text-5xl font-bold my-10 text-center'>My Services</h1>
                <p className='text-center'>Select your Top-Up services</p>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10'>
                {
                    showServices.slice(0,3).map(ser =>
                    <div className="card w-80 md:w-80 lg:w-96 backdrop-blur-sm bg-white/30 shadow-xl" key={ser._id}>
                    <figure><img src={ser.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{ser.title}</h2>
                        <p>{ser.customer}</p>
                        <p>Price: {ser.price}</p>
                        <p>{ser.about.slice(0, 100) + '...'} <Link to={`/services/${ser._id}`}>Read More</Link></p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    </div>)
                }
                </div>
                <button className='btn btn-info block m-auto'><Link to={'/services'}>Load More</Link></button>
            </div>
            
            <div className='backdrop-blur-sm bg-white/30 flex text-center justify-evenly py-10 my-10'>
                <div className='text-lg md:text-xl lg:text-3xl font-bold'>
                    <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
                    <p>Fastest Delivery</p>
                </div>
                <div className='text-lg md:text-xl lg:text-3xl font-bold'>
                    <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                    <p>Trusted & Secured</p>
                </div>
                <div className='text-lg md:text-xl lg:text-3xl font-bold'>
                    <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                    <p>24/7 Support</p>
                </div>
                <div className='text-lg md:text-xl lg:text-3xl font-bold'>
                    <FontAwesomeIcon icon={faMoneyCheckDollar}></FontAwesomeIcon>
                    <p>Easy Payment</p>
                </div>
            </div>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={games} className="w-80 rounded-lg shadow-2xl" alt='album'/>
                    <div className='text-center lg:text-left'>
                    <h1 className="text-5xl font-bold">GAME TOP UP</h1>
                    <p className="py-6 sm: w-full lg:w-9/12">With a wide variety of game top-up selections, you can never miss any new game top-up available in GoodMan Gaming Services. I will strive to bring you the latest and most popular game top-ups available on the market. So Join with me...!!!</p>
                    <button className="btn btn-info shadow-lg shadow-cyan-500/50"><Link to={'/login'}>Join Now</Link></button>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Home;
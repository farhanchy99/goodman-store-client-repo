import React from 'react';
import img1 from '../../assets/img-1.png'
import img2 from '../../assets/img-2.png'
import img3 from '../../assets/img-3.png'
import img4 from '../../assets/img-4.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='w-full md:w-9/12 lg:w-9/12 m-auto'>
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img1} className="w-full" alt='album'/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-20 md:left-24 lg:left-24 top-1/4">
                    <h1 className='text-base md:text-2xl lg:text-6xl font-bold text-white'>
                        Hi there!!<br />
                        This is GoodMan
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:w-2/5 left-20 md:left-24 lg:left-24 top-1/2">
                    <p className='text-xs md:text-lg lg:text-xl text-white'>I am a Gamer like you. I will help you to get any kind of Gaming Top-Up Services in your game.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 md:left-24 lg:left-24 top-3/4">
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-info">CheckOut My Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❯</a>
                </div>
            </div> 

            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img2} className="w-full" alt='album'/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-20 md:left-24 lg:left-24 top-1/4">
                <h1 className='text-base md:text-2xl lg:text-6xl font-bold text-white'>
                        Fastest <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:w-2/5 left-20 md:left-24 lg:left-24 top-1/2">
                <p className='text-xs md:text-lg lg:text-xl text-white'>I will fastest service in your game. It only takes a few seconds to complete a purchase on my services.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 md:left-24 lg:left-24 top-3/4">
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-info">CheckOut My Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img3} className="w-full" alt='album'/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-20 md:left-24 lg:left-24 top-1/4">
                <h1 className='text-base md:text-2xl lg:text-6xl font-bold text-white'>
                        Instant Delivery
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:w-2/5 left-20 md:left-24 lg:left-24 top-1/2">
                <p className='text-xs md:text-lg lg:text-xl text-white'>When you top-up on my services, your purchase is delivered directly to your game account as soon as your payment is complete.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 md:left-24 lg:left-24 top-3/4">
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-info">CheckOut My Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❯</a>
                </div>
            </div> 
            
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img4} className="w-full" alt='album'/>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-20 md:left-24 lg:left-24 top-1/4">
                <h1 className='text-base md:text-2xl lg:text-6xl font-bold text-white'>
                        Exciting Promotions
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 lg:w-2/5 left-20 md:left-24 lg:left-24 top-1/2">
                <p className='text-xs md:text-lg lg:text-xl text-white'>Keep a lookout for the best deals for your favorite games from my services promotions.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-20 md:left-24 lg:left-24 top-3/4">
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-info">CheckOut My Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-xs sm:btn-sm md:btn-md btn-circle">❯</a>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Banner;
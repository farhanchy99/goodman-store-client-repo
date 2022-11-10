import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import ReviewList from '../Shared/ReviewList/ReviewList';
import useTitle from '../../Hooks/useTitle';

const SerDetails = () => {
    const{_id, title, price, about, img} = useLoaderData();
    const {user} = useContext(AuthContext)
    useTitle('Services Details');

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const img = user?.photoURL || 'unregistered';
        const message = form.message.value;


        const review = {
            service: _id,
            serviceName: title,
            price,
            email,
            time:moment().format('LT'),
            img: img,
            customer: name,
            message
        }

        fetch('https://goodman-gaming-server.vercel.app/reviews', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                swal({
                    title: "Successfully Reviewed",
                    button: "OK",
                    icon: "success"
                  });
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='container m-auto'>
            <div className=''>
                <div className='w-4/5 lg:w-9/12 m-auto '>
                <h1 className='text-4xl font-bold my-10 text-center'>Service Details</h1>
                    <div>
                        <div className='my-10'>
                            <div className="card lg:card-side backdrop-blur-sm bg-white/30 shadow-3xl">
                            <figure className='w-auto lg:w-96 p-0 lg:pl-5'><img src={img} alt="Album"/></figure>
                            <div className="card-body w-full lg:w-1/2">
                                <div>
                                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                                    <p>{about}</p>
                                </div>
                                <p className='text-lg font-semibold'>Price: {price}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                {user?.photoURL ? 
                        
                        <>
                            <h1 className='text-4xl font-bold my-10 text-center'>Give a Review</h1>
                            <form onSubmit={handleReview} className=' w-1/2 m-auto'>
                                <div className="form-control my-10">
                                <textarea name="message" className="textarea textarea-bordered backdrop-blur-sm bg-white/30" placeholder="Review Please" required></textarea>
                                </div>
                                <button className='btn btn-info mb-10' type='submit'>Review</button>
                                <ToastContainer/>
                            </form>
                        
                        </>
                        : 
                        <>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold my-10 text-center'>Want to give a review for this Service?</h1>
                            <p className='my-10 text-center'>Please Login!</p>
                            <button className="btn bg-blue-600 shadow-lg"><Link to={'/login'}>Log In</Link></button>
                        </div>
                        </>
                }
                </div>

                <div>
                    <h1 className='text-4xl font-bold my-10 text-center'>Clients Reviews</h1>
                    <ReviewList></ReviewList>
                </div>
            </div>
        </div>
    );
};

export default SerDetails;
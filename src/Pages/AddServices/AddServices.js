import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import moment from 'moment';
import UserService from './UserService';
import swal from "sweetalert";
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
    const {user} = useContext(AuthContext)
    useTitle('Add Services');

    const handleSer = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const title = form.serName.value;
        const price = form.serPrice.value;
        const img = form.serImg.value;
        const about = form.serAbt.value;


        const newService = {
            title,
            price,
            img,
            customer: name,
            time:moment().format('LT'),
            about,
            email
        }

        fetch('https://goodman-gaming-server.vercel.app/services', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                swal({
                    title: "Successfully Registered",
                    button: "OK",
                    icon: "success"
                  });
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <h1 className='text-4xl font-bold my-10 text-center'>Add Services</h1>
            <p className='text-center'>Add your services here</p>
            <form onSubmit={handleSer}>
                <div className='w-4/5 lg:w-1/2 m-auto'>
                <div className='flex my-10 justify-between'>
                    <input name="serName" type="text" placeholder="Service Name" className="input input-bordered w-full max-w-xs backdrop-blur-sm bg-white/30" required/>
                    <input name="serPrice" type="text" placeholder="Price" className="input input-bordered w-full max-w-xs backdrop-blur-sm bg-white/30" required/>
                </div>
                <div className="my-10">
                    <input name="serImg" type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs backdrop-blur-sm bg-white/30" required/>
                </div>
                <div className="form-control my-10">
                    <textarea name="serAbt" className="textarea textarea-bordered backdrop-blur-sm bg-white/30" placeholder="About" required></textarea>
                </div>
                <button className='btn btn-info mb-10' type='submit'>Add Service</button>
                </div>
            </form>

            <div>
                <h1 className='text-4xl font-bold my-10 text-center'>Your Service List</h1>
                <div className=''>
                    <UserService></UserService>
                </div>
            </div>
            
        </div>

        
    );
};

export default AddServices;
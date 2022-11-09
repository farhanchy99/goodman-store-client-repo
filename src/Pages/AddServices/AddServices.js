import React from 'react';

const AddServices = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-10 text-center'>Add Services</h1>
            <p className='text-center'>Add your services here</p>
            <form className=' w-1/2 m-auto'>
                <div className='flex my-10 justify-between'>
                    <input type="text" placeholder="Service Name" className="input input-bordered w-full max-w-xs backdrop-blur-sm bg-white/30" required/>
                    <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs backdrop-blur-sm bg-white/30" required/>
                </div>
                <div className="my-10">
                    <input type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs backdrop-blur-sm bg-white/30" required/>
                </div>
                <div className="form-control my-10">
                    <textarea name="addSer" className="textarea textarea-bordered backdrop-blur-sm bg-white/30" placeholder="About" required></textarea>
                </div>
                <button className='btn btn-info float-right mb-10' type='submit'>Add Service</button>
            </form>
        </div>
    );
};

export default AddServices;
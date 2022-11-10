import register from '../../assets/alone.jpg'
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('')
    
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate("/");
            swal({
                title: "Registered Successfully",
                button: "OK",
                icon: "success"
              });
            const profile ={ displayName: name, photoURL:photoURL};
            updateUserProfile(profile)
            .then(()=>{})
            .catch( e => console.error(e));
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        })
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-1/2 backdrop-blur-sm bg-white/30 p-0 shadow-2xl rounded-lg">
                    <div className="text-center lg:text-left">
                        <img src={register} alt="" className=''/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                    <p>To Join With ME!</p>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">User Name</span>
                        </label>
                        <input name="name" type="text" placeholder="user name" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="photo url" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="email" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white">Register</button>
                        </div>
                        <p className='text-rose-700'>{error}</p>
                        <p>Already have Account?<Link to={'/login'} className="text-lime-300"> Login</Link></p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
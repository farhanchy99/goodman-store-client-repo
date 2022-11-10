import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/squad.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('')
    const {logIn, providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Log In');

    const from = location.state?.from?.pathname|| "/";

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
            setError("");
        })
        .catch((error) => {
            toast.error('Login Unsuccessful', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            setError(error);
        });
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate(from, {replace: true});
            toast.success('Reviewed Successfully',{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        })
        .catch(error => {
            console.error(error);
            toast.error('Login Unsuccessful!!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setError(error.message);
        })
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-4/5 lg:w-1/2 backdrop-blur-sm bg-white/30 p-0 shadow-2xl rounded-lg">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" className='rounded-r-lg'/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit} className="card-body pb-0">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p>To Join With ME!</p>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered text-black" />
                        <label className="label">
                            <p>Don't have account?<Link to={'/register'} className="text-lime-300"> Register Now</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white">Login</button>
                            <ToastContainer/>
                            <p className='text-rose-700 mt-5'>{error}</p>
                        </div>
                        <p className='text-center text-lg text-bold'>OR</p>
                        <div>
                        
                    </div>
                    </form>
                    <div className='card-body pt-0'>
                        <button onClick={handleGoogleSignIn} className="btn btn-warning w-full mb-5 text-white"><FontAwesomeIcon icon={faGoogle} className="mr-5"></FontAwesomeIcon> Google</button>
                        <button className="btn btn-success w-full text-white"><FontAwesomeIcon icon={faGithub} className="mr-5"></FontAwesomeIcon> Github</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
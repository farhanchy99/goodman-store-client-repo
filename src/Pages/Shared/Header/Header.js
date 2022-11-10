import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const {user, logOut } = useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    return (
        <div className='backdrop-blur-sm bg-white/30'>
            <div className="container navbar m-auto px-4 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="nav menu-compact dropdown-content mt-3 p-2 shadow backdrop-blur-sm bg-white/30 rounded-box w-52 text-center">
                        <li className='mb-5'><NavLink to='/' className={({isActive})=> isActive ? 'active' : undefined} end>Home</NavLink></li>
                        <li className='mb-5'><NavLink to='/services'>services</NavLink></li>
                        <li className='mb-5'><NavLink to='/faq'>FAQ</NavLink></li>
                        <li className='mb-5'><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                    </div>
                    <NavLink className='text-2xl text-gray-900 font-semibold flex items-center' to='/'>
                        <img src={logo} alt="logo" className='w-7 d-block m-auto'/>
                        <p className='text-xs text-white ml-1.5 lg:ml-2.5'>GoodMan Gaming</p>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="nav menu-horizontal">
                        <li className='ml-5'><NavLink to='/' className={({isActive})=> isActive ? 'active' : undefined} end>Home</NavLink></li>
                        <li className='ml-5'><NavLink to='/services'>Services</NavLink></li>
                        <li className='ml-5'><NavLink to='/blogs'>Blogs</NavLink></li>
                        {user?.photoURL ? 
                        
                        <>
                        <li className='ml-5'><NavLink to='/addservices'>Add Services</NavLink></li>
                        <li className='ml-5'><NavLink to='/reviewslist'>My Reviews</NavLink></li>
                        
                        </>
                        : 
                        <>
                        
                        </>
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    <NavLink className="hidden lg:block">{user?.displayName}</NavLink>
                    <NavLink className="flex items-center">
                        {user?.photoURL ? 
                        
                        <>
                            <img src={user?.photoURL} alt="user" className='w-8 lg:w-10 rounded-full hidden lg:block lg:m-5'/>
                            <button onClick={handleLogOut} className='btn bg-blue-600 shadow-lg'>Log Out</button>
                        
                        </>
                        : 
                        <>
                            <Link to='/login'><button className="btn bg-blue-600 shadow-lg">Log In</button></Link>
                        </>
                        }
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
};

export default Header;
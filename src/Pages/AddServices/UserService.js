import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const UserService = () => {
    const { user, logOut } = useContext(AuthContext);
    const [userService, setUserService] = useState([]);
    
    useEffect( () =>{
        fetch(`http://localhost:5000/myservices?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setUserService(data))
    }, [user?.email, logOut]);
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10'>
            {
                userService.map(userSer =>
                <div className="card w-80 md:w-80 lg:w-96 backdrop-blur-sm bg-white/30 shadow-xl" key={userSer._id}>
                <figure><img src={userSer.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{userSer.title}</h2>
                    <p>{userSer.customer}</p>
                    <p>Price: {userSer.price}</p>
                    <p>{userSer.about.slice(0, 100) + '...'} <Link to={`/services/${userSer._id}`}>Read More</Link></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>)
            }
        </div>
    );
};

export default UserService;
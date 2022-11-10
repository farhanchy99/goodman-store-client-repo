import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews');
    
    useEffect( () =>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setMyReviews(data))
    }, [user?.email]);

    const handleDelete = id =>{
        const agree = window.confirm (`Are you sure want to delete?`)

        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
        }
    }
    return (
        <div>
            <h1 className='text-4xl font-bold my-10 text-center'>Service Details</h1>
            <div className="overflow-x-auto w-11/12 m-auto text-black">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Users</th>
                    <th>Service ID</th>
                    <th>Reviews</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        myReviews.map(row => 
                        <tr key={row._id}>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={row.img} alt="img"/>
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{row.customer}</div>
                                <div className="text-sm opacity-50">{row.email}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {row.serviceName}
                            <br/>
                            <span className="badge badge-ghost badge-sm">{row.service}</span>
                            </td>
                            <td>{row.message}</td>
                            
                            <th>
                                <label>
                                    <button onClick={() => handleDelete(row._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                </label>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyReviews;
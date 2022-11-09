import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewList = () => {
    const [reviewList, setReviewList] = useState([]);
    const{_id} = useLoaderData();
    
    useEffect( () =>{
        fetch(`http://localhost:5000/reviews?service=${_id}`)
        .then(res =>res.json())
        .then(data => setReviewList(data))
    }, []);
    return (
        <div>
            <h1>Review List</h1>
            <div className="overflow-x-auto w-full text-black">
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
                        reviewList.map(row => 
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
                            <span className="badge badge-ghost badge-sm">{row._id}</span>
                            </td>
                            <td>{row.message}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ReviewList;
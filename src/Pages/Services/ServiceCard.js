import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceCard = ({service}) => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch(`http://localhost:5000/services`)
        .then(res =>res.json())
        .then(data => setServices(data))
        console.log(services)
    }, []);

    
    return (
        <div className='container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10'>
            {
                services.map(service =>
                <div className="card w-80 md:w-80 lg:w-96 backdrop-blur-sm bg-white/30 shadow-xl" key={service._id}>
                <figure>
                <PhotoProvider>
                <PhotoView src={service.img}>
                    <img src={service.img} alt="Shoes" />
                </PhotoView>
                </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.customer}</p>
                    <p>Price: {service.price}</p>
                    <p>{service.about.slice(0, 100) + '...'} <Link to={`/services/${service._id}`}>Read More</Link></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>)
            }
        </div>
    );
};

export default ServiceCard;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Place.css'

const Place = ({ place }) => {
    const { name, description, _id, img } = place;
    const { user } = useAuth();
    const history = useHistory()



    // const handleBooking = () => {
    //     if (user.email) {
    //         console.log(_id);
    //         fetch(`https://murmuring-ravine-36606.herokuapp.com/places/${_id}`, {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body:JSON.stringify()
    //         })
    //     }
    //     else {
    //         history.push('/login');
    //     }
    // }

    return (
        <div className="col">
            <div className="card shadow h-100">
                <img style={{ height: '300px' }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {<Link to={`/orderReview/${_id}`}><button type="button" className="btn btn-outline-danger my-btn">Book</button></Link>}

                    {/* <button type="button" onClick={handleBooking} className="btn btn-outline-danger my-btn">Book</button> */}
                </div>
            </div>
        </div>
    );
};

export default Place;
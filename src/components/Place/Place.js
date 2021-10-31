import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({ place }) => {
    const { name, description, _id, img } = place;

    return (
        <div className="col">
            <div className="card shadow h-100">
                <img style={{ height: '300px' }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {<Link to={`/orderReview/${_id}`}><button type="button" className="btn btn-outline-danger my-btn">Book</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Place;
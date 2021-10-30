import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({ place }) => {
    return (
        <div className="col">
            <div className="card shadow h-100">
                <img style={{ height: '300px' }} src={place.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.description}</p>
                    <Link to="/orderReview"><button type="button" className="btn btn-outline-danger my-btn">Book</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Place;
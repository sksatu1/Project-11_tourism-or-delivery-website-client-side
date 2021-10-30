import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Place from '../Place/Place';

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-3 my-3">
            {
                places.map(place => <Place
                    key={place._id}
                    place={place}
                ></Place>)
            }
        </div>
    );
};

export default Places;
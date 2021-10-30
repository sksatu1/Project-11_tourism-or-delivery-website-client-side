import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderReview = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://murmuring-ravine-36606.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(user.email);
                data.email = user.email;
                data.status = 'Pending';
                setOrder(data)
            })
    }, [])



    const handleAddToDb = () => {
        fetch("https://murmuring-ravine-36606.herokuapp.com/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    alert('Go to "My Order" to confirm your order');
                    history.push('/home');
                }
            })
    }


    console.log(order)

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={order.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{order.name}</h3>
                            <p className="card-text">{order.description}</p>
                            <button type="button" onClick={handleAddToDb} className="btn btn-outline-danger my-btn">Proceed to order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
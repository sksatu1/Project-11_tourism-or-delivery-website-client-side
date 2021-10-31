import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";


const OrderReview = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { user } = useAuth();
    const history = useHistory();


    const { register, handleSubmit } = useForm();


    useEffect(() => {
        fetch(`https://murmuring-ravine-36606.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => {

                setOrder(data)
            })
    }, [])

    const onSubmit = data => {
        data.order = order;
        data.status = 'Pending';
        fetch("https://murmuring-ravine-36606.herokuapp.com/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    alert('Go to "My Order" to confirm your order');
                    history.push('/home');
                }
            })
        console.log(data);
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
                        </div>
                    </div>
                </div>
            </div>

            {/* form  */}
            <h1 className='my-3'>Please give your information and submit</h1>
            <form className='d-flex flex-column w-50 mx-auto mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' {...register("userName", { required: true })} placeholder='Name' value={user.displayName} readOnly />
                <input className='mb-2' type='email' {...register("email", { required: true })} placeholder='email' value={user.email} readOnly />
                <input className='mb-2' {...register("address", { required: true })} placeholder='address' />
                <input className='mb-2 btn btn-outline-danger my-btn' type="submit" />
            </form>

        </div>
    );
};

export default OrderReview;

// className = "btn btn-outline-danger my-btn"
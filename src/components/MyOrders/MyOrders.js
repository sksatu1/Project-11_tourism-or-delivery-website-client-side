import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-ravine-36606.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, []);


    const myOrders = orders.filter(order => order.email === user.email)
    return (
        myOrders.length ?
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
                {

                    myOrders.map(myOrder => <MyOrder
                        key={myOrder._id}
                        myOrder={myOrder}>
                    </MyOrder>)
                }
            </div>
            :
            <div className="orders d-flex justify-content-center align-items-center">
                <h1>Sorry.. No Order to show</h1>
            </div>
    );
};

export default MyOrders;
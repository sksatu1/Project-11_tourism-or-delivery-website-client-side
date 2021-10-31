import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OtherOrder from '../AllOrders/OtherOrder';
import MyOrder from '../MyOrder/MyOrder';

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

        <div className="row row-cols-1 row-cols-md-3 g-4 mx-3 my-3">
            {
                myOrders.map(myOrder => <MyOrder
                    key={myOrder._id}
                    myOrder={myOrder}>
                </MyOrder>)
            }
        </div>
    );
};

export default MyOrders;
import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-ravine-36606.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                orders.map(order => <MyOrder
                    key={order._id}
                    order={order}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;
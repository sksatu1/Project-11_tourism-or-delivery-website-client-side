import React, { useEffect, useState } from 'react';
import OtherOrder from './OtherOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-ravine-36606.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders);
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                orders.map(data => <OtherOrder
                    key={data._id}
                    data={data}
                ></OtherOrder>)
            }
        </div>
    );
};

export default AllOrders;
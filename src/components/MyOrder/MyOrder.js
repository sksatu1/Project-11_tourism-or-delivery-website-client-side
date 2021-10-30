import React from 'react';

const MyOrder = ({ order }) => {
    const { name, description, img, status, _id } = order;

    const handleConfirm = () => {
        fetch(`https://murmuring-ravine-36606.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            })
    }

    return (
        <div className="col">
            <div className="card shadow h-100">
                <img style={{ height: '300px' }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bolder p-3 bg-danger">{status}</p>

                    <button type="button" onClick={handleConfirm} className="btn btn-outline-danger my-btn me-4">Confirm</button>

                    <button type="button" className="btn btn-outline-danger my-btn ms-4">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
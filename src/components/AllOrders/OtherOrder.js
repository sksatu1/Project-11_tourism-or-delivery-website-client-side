import React from 'react';

const OtherOrder = ({ data }) => {
    const { _id, status } = data;
    const { name, description, img } = data.order;
    console.log('data', data);

    const handleConfirm = () => {
        fetch(`https://murmuring-ravine-36606.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            })
    }

    // delete --------------------------
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure you want to delete?')

        if (proceed) {
            fetch(`https://murmuring-ravine-36606.herokuapp.com/orders/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                })
        }
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

                    <button type="button" onClick={handleDelete} className="btn btn-outline-danger my-btn ms-4">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default OtherOrder;
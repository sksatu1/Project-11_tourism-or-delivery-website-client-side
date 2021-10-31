import React from 'react';

const MyOrder = ({ myOrder }) => {
    const { _id, status, userName, email } = myOrder;
    const { img, name, description } = myOrder.order;

    const handleConfirm = () => {
        fetch(`https://murmuring-ravine-36606.herokuapp.com/orders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrder)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();

            })
    }

    // delete --------------------------
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')

        if (proceed) {
            fetch(`https://murmuring-ravine-36606.herokuapp.com/orders/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    alert('successfully deleted order');
                    window.location.reload();
                })
        }
    }


    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <br />
                    <p className='fw-bold'>Ordered By : {userName}</p>
                    <p className="fw-bold">user email : {email}</p>
                    <br />

                    <p className="card-text">{description}</p>

                    <p className="card-text fw-bolder p-3 bg-danger">{status}</p>

                    <button type="button" onClick={handleConfirm} className="btn btn-outline-danger my-btn me-4">Confirm</button>

                    <button type="button" onClick={handleDelete} className="btn btn-outline-danger my-btn ms-4">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default MyOrder;

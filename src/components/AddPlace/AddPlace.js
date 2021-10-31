import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddPlace = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch("https://murmuring-ravine-36606.herokuapp.com/places", {
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
                    alert('Successfully added New Place');
                    history.push('/home');
                }
            })
        console.log(data);
    }


    return (
        <div>
            {/* form  */}
            <h1 className='my-3'>Add a New place you like</h1>
            <form className='d-flex flex-column w-50 mx-auto mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' {...register("name", { required: true })} placeholder='Name' />

                <input className='mb-2' {...register("description", { required: true })} placeholder='Description' />

                <input className='mb-2' {...register("img", { required: true })} placeholder='Image URL' />

                <input className='mb-2 btn btn-outline-danger my-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddPlace;
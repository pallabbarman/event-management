import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

require('dotenv').config();

const AddService = () => {
    const [imageURL, setImageURL] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleImageUpload = (event) => {
        const imageData = new FormData();

        imageData.set('key', `${process.env.REACT_APP_IMAGEBB_KEY}`);
        imageData.append('image', event.target.files[0]);

        const loading = toast.loading('Uploading... Please wait!');

        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('Successfully Uploaded The Image!!!');
                    setImageURL(response.data.data.display_url);
                }
            })
            .catch(() => {
                toast.error('Something went wrong! Please try again!');
            })
            .finally(() => toast.dismiss(loading));
    };

    const onSubmit = (data, e) => {
        const serviceData = {
            title: data.title,
            imageURL,
            service: data.des,
            amount: data.amount,
        };

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(serviceData),
        })
            .then((res) => {
                res.json();
                toast.success('New Services added successfully');
                e.target.reset();
            })
            .catch(() => {
                toast.error('Something went wrong! Please try again!');
            });
    };

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="review-span mb-5">
                    <h1 className="h1-hover mb-5 text-center">Add Service</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Service Title"
                                {...register('title', { required: true })}
                            />
                            {errors.title && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control
                                type="number"
                                placeholder="Amount"
                                {...register('amount', { required: true })}
                            />
                            {errors.amount && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                rows={3}
                                {...register('des', { required: true })}
                            />
                            {errors.des && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control
                                type="file"
                                {...register('file', { required: true })}
                                onChange={handleImageUpload}
                            />
                            <br />
                            {errors.file && <span>This field is required</span>}
                        </Form.Group>
                        <Button className="review-btn px-5" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </section>
    );
};
export default AddService;

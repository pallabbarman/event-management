import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './Review.css';

const Review = () => {
    const { loggedInUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        const reviewData = {
            img: loggedInUser.photoURL,
            name: data.name,
            service: data.service,
            description: data.des,
        };

        const loading = toast.loading('Loading...Please Wait!!!');

        axios
            .post('https://web-eventia.herokuapp.com/addReview', reviewData)
            .then((res) => {
                res.json();
                toast.success('Thanks for your feedback!');
                e.target.reset();
            })
            .catch((err) => toast.error(err.message))
            .finally(() => toast.dismiss(loading));
    };

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="review-span mb-5">
                    <h1 className="text-center h1-hover mb-5">Review</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={loggedInUser.displayName}
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control
                                type="text"
                                placeholder="Service Name"
                                {...register('service', { required: true })}
                            />
                            {errors.service && <span>This field is required</span>}
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
                        <Button className="review-btn px-5" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </section>
    );
};
export default Review;

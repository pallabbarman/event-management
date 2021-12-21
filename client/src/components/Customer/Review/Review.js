import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './Review.css';

const Review = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="review-span">
                    <h1 className="text-center h1-hover mb-5">Review</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Name"
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

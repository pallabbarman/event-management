import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
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
                <Container className="review-span mb-5">
                    <h1 className="h1-hover mb-5 text-center">Add Service</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Service Title"
                                {...register('Title', { required: true })}
                            />
                            {errors.Title && <span>This field is required</span>}
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
                            <Form.Control type="file" {...register('file', { required: true })} />
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

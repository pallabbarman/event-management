import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        const adminData = {
            email: data.email,
        };

        axios
            .post(`https://web-eventia.herokuapp.com/addAAdmin`, adminData)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('Admin added successfully!');
                    e.target.reset();
                }
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="review-span mb-5">
                    <h1 className="text-center h1-hover mb-5">Make Admin</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register('email', { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
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
export default AddAdmin;

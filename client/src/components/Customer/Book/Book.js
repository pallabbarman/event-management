import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Book = () => {
    const { _id } = useParams();
    const [booking, setBooking] = useState([]);

    const { loggedInUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/service/${_id}`)
            .then((res) => setBooking(res.data))
            .catch((err) => toast.error(err.message));
    }, [_id]);

    const addBooking = booking.find((bk) => parseInt(bk._id, 10) === parseInt(_id, 10));

    const onSubmit = (data) => {
        const servicesDetails = {
            name: data.name,
            email: data.email,
            service: data.service,
            des: addBooking?.service,
            amount: addBooking?.amount,
            serviceImg: addBooking?.imageURL,
            userImg: loggedInUser.photoURL,
            status: 'pending',
            date: new Date(),
        };

        const loading = toast.loading('Loading...Please Wait!!!');

        axios
            .post(`http://localhost:5000/addServicesOrder`, servicesDetails)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('Your order placed successfully');
                }
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
                    <h1 className="text-center h1-hover mb-5">Book your service</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={loggedInUser?.displayName}
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                defaultValue={loggedInUser?.email}
                                {...register('email', { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Control
                                type="text"
                                placeholder="Service Name"
                                defaultValue={addBooking?.title}
                                {...register('service', { required: true })}
                            />
                            {errors.service && <span>This field is required</span>}
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

export default Book;

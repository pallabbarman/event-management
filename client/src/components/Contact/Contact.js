import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import contact from '../../images/contact.svg';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './Contact.css';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <section>
            <NavBar />
            <div className="contact">
                <Container>
                    <Row className="align-items-center review-span">
                        <h1 className="text-center h1-hover mb-5">Contact Us</h1>
                        <Col lg={5} className="mb-5">
                            <img src={contact} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={7}>
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
                                        type="email"
                                        placeholder="Email"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <span>This field is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Subject"
                                        {...register('subject', { required: true })}
                                    />
                                    {errors.subject && <span>This field is required</span>}
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
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
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </section>
    );
};

export default Contact;

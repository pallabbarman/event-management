import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import google from '../../../images/google.svg';
import loginImg from '../../../images/login.svg';
import warning from '../../../images/warning.svg';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(true);

    const { googleSignIn, emailSignIn } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (e, data) => {
        const email = data.target.email.value;
        const password = data.target.password.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Please Enter a valid Email Address..');
        } else {
            emailSignIn(email, password, navigate, location, e);
        }
    };

    const handleGoogleSignIn = () => {
        googleSignIn(navigate, location);
    };

    return (
        <section>
            <NavBar />
            <div className="login">
                <Container>
                    <Row className="align-items-center review-span">
                        <h1 className="text-center h1-hover mb-5">Login</h1>
                        <Col lg={6} className="mb-5">
                            <img src={loginImg} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={6}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && <span>Email is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register('password', {
                                            required: true,
                                        })}
                                    />
                                    {errors.password && <span>Password is required</span>}
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <input
                                        className="login-btn form-control"
                                        type="submit"
                                        value="Sign In"
                                    />
                                </div>
                            </Form>
                            <br />
                            <div className="text-center">
                                <Button as={Link} to="/reset" variant="outline-secondary">
                                    Forgot Password
                                </Button>
                                <br />
                                <br />
                                <Link className="login-link" to="/register">
                                    Do not have an account? Create a new account.
                                </Link>
                            </div>
                            <br />
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="px-3 google-btn"
                                    variant="outline-primary"
                                    onClick={handleGoogleSignIn}
                                >
                                    <img src={google} className="google-img" alt="" /> Sign in with
                                    Google
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Toast
                show={show}
                onClose={() => setShow(false)}
                className="admin-toast"
                delay={15000}
                autohide
                animation={false}
            >
                <Toast.Header>
                    <img src={warning} className="me-2" alt="warning" />
                    <strong className="me-auto">Warning</strong>
                </Toast.Header>
                <Toast.Body>
                    <h3>Enter the following user name and password to access the admin panel.</h3>
                    <ul>
                        <li>username: admin@test.com</li>
                        <li>password: ADMINtest123!</li>
                    </ul>
                </Toast.Body>
            </Toast>
            <Footer />
        </section>
    );
};

export default Login;

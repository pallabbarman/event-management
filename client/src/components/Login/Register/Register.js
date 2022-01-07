import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import google from '../../../images/google.svg';
import registerImg from '../../../images/regi.svg';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { googleSignIn, emailSignUp } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleGoogleSignIn = () => {
        googleSignIn(navigate, location);
    };

    const onSubmit = (e, data) => {
        const name = data.target.name.value;
        const email = data.target.email.value;
        const password = data.target.password.value;
        const confirmPassword = data.target.confirmPassword.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Please Enter a valid Email Address..');
        } else if (password !== confirmPassword) {
            toast.error('Password not matched...');
        } else if (password.length < 8) {
            toast.error('Your Password must have 8 characters...');
        } else if (!/(?=.*?[A-Z])/.test(password)) {
            toast.error('Password should be at least 1 Uppercase');
        } else if (!/(?=.*?[0-9])/.test(password)) {
            toast.error('Password should be at least 1 Number');
        } else {
            emailSignUp(name, email, password, navigate);
        }
    };

    return (
        <section>
            <NavBar />
            <div className="login">
                <Container>
                    <Row className="align-items-center review-span">
                        <h1 className="text-center h1-hover mb-5">Register</h1>
                        <Col lg={6}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <span>Name is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <span>Email is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register('password', { required: true })}
                                    />
                                    {errors.password && <span>Password is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        {...register('confirmPassword', { required: true })}
                                    />
                                    {errors.confirmPassword && <span>Password is required</span>}
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <input
                                        className="login-btn form-control"
                                        type="submit"
                                        value="Sign Up"
                                    />
                                </div>
                            </Form>
                            <br />
                            <div className="text-center">
                                <Link className="login-link" to="/login">
                                    Already Registered? Please Login Here.
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
                        <Col lg={6} className="mt-5">
                            <img src={registerImg} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </section>
    );
};

export default Register;

import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import google from '../../../images/google.svg';
import reset from '../../../images/reset.svg';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { resetPassword, googleSignIn } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleGoogleSignIn = () => {
        googleSignIn(navigate, location);
    };

    const onSubmit = (e, data) => {
        const email = data.target.email.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Please Enter a valid Email Address..');
        } else {
            resetPassword(email, e);
            data.target.reset();
        }
    };

    return (
        <section>
            <NavBar />
            <div className="login">
                <Container>
                    <Row className="align-items-center review-span">
                        <h1 className="text-center h1-hover mb-5">Forgot Password</h1>
                        <Col lg={6} className="mb-5">
                            <img src={reset} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={6}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <span>Email is required</span>}
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <input
                                        className="login-btn form-control"
                                        type="submit"
                                        value="Reset Password"
                                    />
                                </div>
                            </Form>
                            <br />
                            <div className="text-center">
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
            <Footer />
        </section>
    );
};

export default ResetPassword;

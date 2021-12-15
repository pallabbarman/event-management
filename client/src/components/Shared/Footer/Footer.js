/* eslint-disable jsx-a11y/anchor-has-content */
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <Container className="footer-container">
            <Row>
                <Col lg={4} md={6}>
                    <div>
                        <h1 id="eventia">Eventia</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            laudantium est quas molestiae nihil, eligendi doloribus, enim error
                            sequi quisquam, excepturi provident cum nostrum nemo voluptas vitae
                            necessitatibus voluptatem reprehenderit?
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <h3>Information</h3>
                    <div className="mt-4">
                        <Link to="/dashboard">
                            <p>Dashboard</p>
                        </Link>
                        <Link to="/login">
                            <p>Login</p>
                        </Link>
                        <Link to="/contact">
                            <p>Contact</p>
                        </Link>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <h3>Have a Questions?</h3>
                    <div className="mt-4">
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Mirpur-2, Dhaka, Bangladesh
                        </p>
                        <p>
                            <a href="tel:+8801717171717">
                                <FontAwesomeIcon icon={faPhoneAlt} /> +8801717171717
                            </a>
                        </p>
                        <p>
                            <a href="mailto:contact@eventia.com">
                                <FontAwesomeIcon icon={faEnvelope} /> contact@eventia.com
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>
            <div className="text-center mt-5 social-link">
                <h6>Copyright &copy; {new Date().getFullYear()} Eventia</h6>
                <a target="_blank" rel="noreferrer" href="http://https://www.facebook.com/pallabbm">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pallabbm/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/pallabbm">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/pallabbarman">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/pallabbarman/"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </Container>
    </footer>
);

export default Footer;

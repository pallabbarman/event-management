import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import not from '../../images/not-found.svg';
import './NotFound.css';

const NotFound = () => (
    <section>
        <Container className="not-found">
            <div className="text-center">
                <h1>Page not found!</h1>
                <img src={not} alt="Not Found" className="img-fluid not-found-img" />
            </div>
            <br />
            <div className="text-center mb-5">
                <Button className="btn-home" as={Link} to="/" type="button">
                    <FontAwesomeIcon icon={faHome} /> Back to Home
                </Button>
            </div>
        </Container>
    </section>
);

export default NotFound;

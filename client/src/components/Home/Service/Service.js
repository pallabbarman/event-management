import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { serviceData } = props;
    const { _id, title, imageURL, amount, service } = serviceData;
    return (
        <Col md={6} lg={4} xl={3} className="d-flex justify-content-center mt-5">
            <Card as={Link} to={`book/${_id}`} className="service-card">
                <Card.Img variant="top" src={imageURL} />
                <br />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <h6 className="text-center">Amount: $ {amount}</h6>
                    <Card.Text>{service}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

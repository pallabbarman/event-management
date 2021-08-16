import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { service } = props;
    const { name, price, img, description } = service;
    return (
        <Col md={6} lg={4} className="d-flex justify-content-center mt-5">
            <Card className="service-card">
                <Card.Img variant="top" src={img} />
                <br />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <h6 className="text-center">Amount: $ {price}</h6>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

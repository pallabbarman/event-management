import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { reviewData } = props;
    const { name, img, description, service } = reviewData;
    return (
        <div className="d-flex justify-content-center mt-5">
            <Card className="client-review">
                <div className="client-img">
                    <Card.Img src={img} />
                    <h6>{name}</h6>
                </div>
                <Card.Body>
                    <Card.Title className="text-center clientsays">{service}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;

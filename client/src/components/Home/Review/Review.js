import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { review } = props;
    const { name, img, description } = review;
    return (
        <div className="d-flex justify-content-center mt-5">
            <Card className="client-review">
                <div className="client-img">
                    <Card.Img src={img} />
                    <h6>Lorem ipsumd</h6>
                </div>
                <Card.Body>
                    <Card.Title className="text-center clientsays">{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;

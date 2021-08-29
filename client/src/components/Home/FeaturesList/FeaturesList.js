import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './FeaturesList.css';

const FeaturesList = (props) => {
    const { feature } = props;
    const { title, img, des } = feature;
    return (
        <Col lg={6} className="d-flex justify-content-center">
            <Card className="ft-items mt-5">
                <Row className="align-items-center">
                    <Col md={3}>
                        <Card.Img className="img-fluid" variant="top" src={img} />
                    </Col>
                    <Col md={9}>
                        <Card.Body>
                            <h3 className="text-center">{title}</h3>
                            <Card.Text>{des}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default FeaturesList;

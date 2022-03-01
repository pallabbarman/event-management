import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => (
    <main className="top-banner">
        <Container>
            <Row className="d-flex align-items-center banner">
                <Col lg={7}>
                    <div className="banner-content">
                        <h1>Welcome To Eventia</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            laudantium est quas molestiae nihil, eligendi doloribus, enim error
                            sequi quisquam, excepturi provident cum nostrum nemo voluptas vitae
                            necessitatibus voluptatem reprehenderit?
                        </p>
                        <Button
                            className="px-5 dash-btn"
                            as={Link}
                            to="/dashboard"
                            variant="outline-primary"
                            type="button"
                        >
                            Hire Us
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </main>
);

export default TopBanner;

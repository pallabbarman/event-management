import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import demo from '../../../images/demo.jpg';
import './Features.css';

const Features = () => (
    <section className="features mt-5">
        <Container>
            <Row className="align-items-center feature">
                <Col lg={6} className="text-center">
                    <img className="img-fluid feature-img" src={demo} alt="" />
                </Col>
                <Col lg={6}>
                    <h1 className="text-center">Party</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium
                        officia deserunt ipsam, provident unde atque obcaecati, vel voluptatem
                        maxime magnam, omnis excepturi aliquam veniam cupiditate rem nam! Soluta
                        dolore, nam, ipsum harum pariatur minus, reiciendis earum ea cumque eveniet
                        exercitationem! Temporibus necessitatibus placeat architecto laboriosam,
                        blanditiis numquam iusto voluptatibus rem nam odio, sunt perferendis atque
                        accusantium similique dolores minus totam nisi dolorum. Eveniet, excepturi
                        nemo voluptate, placeat sed eligendi provident illum error similique, quasi
                        velit unde temporibus sapiente dicta obcaecati numquam delectus debitis a
                        esse. Reiciendis corporis saepe odio perspiciatis iusto quod esse. Libero
                        ipsa pariatur illum laborum voluptate.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Features;

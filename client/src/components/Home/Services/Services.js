/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then((response) => response.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    return (
        <section>
            <Container>
                <h1 id="service-name" className="text-center mt-5">
                    Our Services
                </h1>
                <Row>
                    {services.map((serviceData) => (
                        <Service serviceData={serviceData} key={serviceData._id} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;

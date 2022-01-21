/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/services`)
            .then((res) => setServices(res.data))
            .catch((err) => toast.error(err.message));
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

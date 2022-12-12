import { css } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import HashLoader from 'react-spinners/HashLoader';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    const override = css`
        display: block;
        margin: 10px auto;
    `;

    useEffect(() => {
        axios
            .get(`https://eventia.onrender.com/services`)
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
                    {!services.length ? (
                        <HashLoader css={override} color="#0ee7c9" size={120} />
                    ) : (
                        services.map((serviceData) => (
                            <Service serviceData={serviceData} key={serviceData._id} />
                        ))
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Services;

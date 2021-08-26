import React from 'react';
import { Container, Row } from 'react-bootstrap';
import birth from '../../../images/undraw_Birthday_cake_2wxy.svg';
import party from '../../../images/undraw_Having_fun_re_vj4h.svg';
import wed from '../../../images/undraw_wedding_t1yl.svg';
import Service from '../Service/Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Weeding',
            price: 150,
            img: wed,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 2,
            name: 'Birthday',
            price: 150,
            img: birth,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 3,
            name: 'Party',
            price: 150,
            img: party,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 4,
            name: 'Party',
            price: 150,
            img: party,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
    ];
    return (
        <section>
            <Container>
                <h1 id="service-name" className="text-center mt-5">
                    OUR SERVICES
                </h1>
                <Row>
                    {servicesData.map((service) => (
                        <Service service={service} key={service.id} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;

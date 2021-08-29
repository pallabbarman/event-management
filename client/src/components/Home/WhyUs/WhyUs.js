import React from 'react';
import { Container, Row } from 'react-bootstrap';
import experiences from '../../../images/experiences.svg';
import guaranties from '../../../images/guaranties.svg';
import quality from '../../../images/quality.svg';
import skills from '../../../images/skills.svg';
import FeaturesList from '../FeaturesList/FeaturesList';
import './WhyUs.css';

const WhyUs = () => {
    const featureData = [
        {
            id: 1,
            img: skills,
            title: 'Skills',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum.',
        },
        {
            id: 2,
            img: experiences,
            title: 'Experiences',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum.',
        },
        {
            id: 3,
            img: quality,
            title: 'Quality',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum.',
        },
        {
            id: 4,
            img: guaranties,
            title: 'Guaranties',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum.',
        },
    ];
    return (
        <section>
            <Container>
                <div className="text-center mt-5 whyUs">
                    <h1>WHY CHOOSE US</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores
                        molestias veniam, adipisci reiciendis provident fugit cumque. Commodi, ab
                        molestiae.
                    </p>
                </div>
                <Row>
                    {featureData.map((feature) => (
                        <FeaturesList key={feature.id} feature={feature} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};
export default WhyUs;

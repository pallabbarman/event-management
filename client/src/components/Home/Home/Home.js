import React from 'react';
import Features from '../Features/Features';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => (
    <div>
        <NavBar />
        <TopBanner />
        <Services />
        <Features />
        <WhyUs />
    </div>
);

export default Home;

import React from 'react';
import Features from '../Features/Features';
import NavBar from '../NavBar/NavBar';
import Reviews from '../Reviews/Reviews';
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
        <Reviews />
    </div>
);

export default Home;

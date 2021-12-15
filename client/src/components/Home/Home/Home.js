import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Features from '../Features/Features';
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
        <Footer />
    </div>
);

export default Home;

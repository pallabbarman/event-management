import React from 'react';
import Features from '../Features/Features';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => (
    <div>
        <NavBar />
        <TopBanner />
        <Services />
        <Features />
    </div>
);

export default Home;

import React from 'react';
import { Container } from 'react-bootstrap';
import dashboard from '../../../images/dashboard.svg';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => (
    <section>
        <div>
            <Sidebar />
        </div>
        <div className="dashboard pt-5 mb-5">
            <Container className="text-center">
                <h1>Welcome to the dashboard</h1>
                <br />
                <img className="img-fluid dash-img" src={dashboard} alt="dashboard" />
            </Container>
        </div>
    </section>
);

export default Dashboard;

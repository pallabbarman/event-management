import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import dashboard from '../../../images/dashboard.svg';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const { loggedInUser } = useAuth();
    console.log(loggedInUser);
    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5 mb-5">
                <Container className="text-center">
                    <h1>Welcome {loggedInUser.displayName} to your dashboard</h1>
                    <br />
                    <img className="img-fluid dash-img" src={dashboard} alt="dashboard" />
                </Container>
            </div>
        </section>
    );
};

export default Dashboard;

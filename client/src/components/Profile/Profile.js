import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './Profile.css';

const Profile = () => {
    const { loggedInUser, logOut } = useAuth();
    const { photoURL, displayName, email } = loggedInUser;

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="mb-5">
                    <h1 className="text-center h1-hover mb-5">Profile</h1>
                    <div className="profile-info">
                        <img src={photoURL} alt="" className="img-fluid profile-img" />
                        <br />
                        <br />
                        <h3>Name: {displayName}</h3>
                        <h5>Email: {email}</h5>
                        <br />
                        <button type="button" className="logout-btn" onClick={logOut}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Profile;

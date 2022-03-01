import {
    faChartLine,
    faClipboardList,
    faCommentAlt,
    faComments,
    faEnvelope,
    faHome,
    faList,
    faPlus,
    faTasks,
    faUserCircle,
    faUsers,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const { loggedInUser } = useAuth();

    useEffect(() => {
        axios
            .post('https://web-eventia.herokuapp.com/isAdmin', { email: loggedInUser.email })
            .then((res) => {
                setIsAdmin(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, [loggedInUser.email]);

    return (
        <section>
            <div className="sidebar">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <Link to="/dashboard">
                    <FontAwesomeIcon icon={faChartLine} /> Dashboard
                </Link>
                <Link to="/profile">
                    <FontAwesomeIcon icon={faUserCircle} /> Profile
                </Link>
                {isAdmin ? (
                    <>
                        <Link to="/addService">
                            <FontAwesomeIcon icon={faPlus} /> Add Service
                        </Link>
                        <Link to="/addAdmin">
                            <FontAwesomeIcon icon={faUserShield} /> Make Admin
                        </Link>
                        <Link to="/orderList">
                            <FontAwesomeIcon icon={faList} /> Order List
                        </Link>
                        <Link to="/allUsers">
                            <FontAwesomeIcon icon={faUsers} /> All Users
                        </Link>
                        <Link to="/manageServices">
                            <FontAwesomeIcon icon={faClipboardList} /> Manage Services
                        </Link>
                        <Link to="/manageReviews">
                            <FontAwesomeIcon icon={faComments} /> Manage Reviews
                        </Link>
                        <Link to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/bookingList">
                            <FontAwesomeIcon icon={faTasks} /> Booking List
                        </Link>
                        <Link to="/review">
                            <FontAwesomeIcon icon={faCommentAlt} /> Review
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
};
export default Sidebar;

import {
    faChartLine,
    faClipboardList,
    faCommentAlt,
    faComments,
    faEnvelope,
    faHome,
    faList,
    faPlus,
    faShoppingCart,
    faTasks,
    faUserCircle,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
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
            <Link to="/booking">
                <FontAwesomeIcon icon={faShoppingCart} /> Book
            </Link>
            <Link to="/bookingList">
                <FontAwesomeIcon icon={faTasks} /> Booking List
            </Link>
            <Link to="/review">
                <FontAwesomeIcon icon={faCommentAlt} /> Review
            </Link>
            <Link to="/orderList">
                <FontAwesomeIcon icon={faList} /> Order List
            </Link>
            <Link to="/addService">
                <FontAwesomeIcon icon={faPlus} /> Add Service
            </Link>
            <Link to="/addAdmin">
                <FontAwesomeIcon icon={faUserShield} /> Make Admin
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
        </div>
    </section>
);
export default Sidebar;

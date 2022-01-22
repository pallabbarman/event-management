import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { loggedInUser, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Spinner />;
    }

    if (loggedInUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

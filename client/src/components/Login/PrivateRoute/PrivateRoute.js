import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { loggedInUser, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="text-center">
                <Spinner animation="grow" />
            </div>
        );
    }

    if (loggedInUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

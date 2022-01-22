import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Spinner from '../../Spinner/Spinner';

const BookingList = () => {
    const [services, setServices] = useState([]);

    const { loggedInUser } = useAuth();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/servicesOrderByEmail?email=${loggedInUser.email}`)
            .then((res) => setServices(res.data))
            .catch((err) => toast.error(err.message));
    }, [loggedInUser.email]);

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="mb-5">
                    <h1 className="text-center h1-hover mb-5">Booking List</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Cost</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!services.length ? (
                                <Spinner />
                            ) : (
                                services.map((service, index) => (
                                    <tr key={service._id}>
                                        <td>{index + 1}</td>
                                        <td>{service.name}</td>
                                        <td>{service.service}</td>
                                        <td>$ {service.amount}</td>
                                        <td>{new Date(service.date).toDateString('dd/MM/yyyy')}</td>
                                        <td>{service.status}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </section>
    );
};

export default BookingList;

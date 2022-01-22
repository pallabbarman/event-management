import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Spinner from '../../Spinner/Spinner';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/services`)
            .then((response) => setServices(response.data))
            .catch((error) => toast.error(error.message));
    }, [services]);

    const deleteService = (_id) => {
        axios
            .delete(`http://localhost:5000/delete/${_id}`)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('Service delete successfully!');
                }
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="mb-5">
                    <h1 className="text-center h1-hover mb-5">Manage Services</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!services.length ? (
                                <Spinner />
                            ) : (
                                services.map((service, index) => (
                                    <tr key={service._id}>
                                        <td>{index + 1}</td>
                                        <td>{service.title}</td>
                                        <td>{service.amount}</td>
                                        <td>
                                            <Button
                                                variant="outline-danger"
                                                onClick={() => deleteService(service._id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </td>
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

export default ManageServices;

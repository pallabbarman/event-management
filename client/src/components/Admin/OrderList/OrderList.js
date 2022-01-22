import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Spinner from '../../Spinner/Spinner';

const OrderList = () => {
    const [ordersList, setOrderList] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/servicesOrder`)
            .then((response) => setOrderList(response.data))
            .catch((error) => toast.error(error.message));
    }, [ordersList]);

    const handleChange = (_id, event) => {
        const updateStatus = {
            status: event.target.value,
            _id,
        };
        axios
            .patch(`http://localhost:5000/update/${_id}`, updateStatus)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Status updated successfully!');
                }
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="mb-5">
                    <h1 className="text-center h1-hover mb-5">Order List</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!ordersList.length ? (
                                <Spinner />
                            ) : (
                                ordersList.map((order, index) => (
                                    <tr key={order._id}>
                                        <td>{index + 1}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.service}</td>
                                        <td>Credit Card</td>
                                        <td>
                                            <Form.Group>
                                                <Form.Control
                                                    as="select"
                                                    onChange={(event) =>
                                                        handleChange(order._id, event)
                                                    }
                                                    defaultValue={order.status}
                                                >
                                                    <option>Pending</option>
                                                    <option>On going</option>
                                                    <option>Done</option>
                                                </Form.Control>
                                            </Form.Group>
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

export default OrderList;

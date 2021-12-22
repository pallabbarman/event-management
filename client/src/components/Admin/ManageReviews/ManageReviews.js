import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ManageReviews = () => (
    <section>
        <div>
            <Sidebar />
        </div>
        <div className="dashboard pt-5">
            <Container className="mb-5">
                <h1 className="text-center h1-hover mb-5">Manage Reviews</h1>
                <Table className="table" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark Hanson</td>
                            <td>Otto@gmail.com</td>
                            <td>
                                <Button variant="outline-danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <Button variant="outline-danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <Button variant="outline-danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    </section>
);

export default ManageReviews;

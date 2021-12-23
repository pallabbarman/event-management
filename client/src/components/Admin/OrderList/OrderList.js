import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderList = () => (
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
                        <tr>
                            <td>1</td>
                            <td>Mark Hanson</td>
                            <td>Otto@gmail.com</td>
                            <td>Birthday party</td>
                            <td>Credit Card</td>
                            <td>On going</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    </section>
);

export default OrderList;

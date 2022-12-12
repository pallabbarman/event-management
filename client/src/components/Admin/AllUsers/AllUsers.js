import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Spinner from '../../Spinner/Spinner';

const AllUsers = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('https://eventia.onrender.com/allUsers')
            .then((res) => setUser(res.data))
            .catch((err) => toast.error(err.message));
    }, []);

    return (
        <section>
            <div>
                <Sidebar />
            </div>
            <div className="dashboard pt-5">
                <Container className="mb-5">
                    <h1 className="text-center h1-hover mb-5">All Users</h1>
                    <Table className="table" striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!users.length ? (
                                <Spinner />
                            ) : (
                                users.map((review, index) => (
                                    <tr key={review._id}>
                                        <td>{index + 1}</td>
                                        <td>{review.displayName}</td>
                                        <td>{review.email}</td>
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

export default AllUsers;

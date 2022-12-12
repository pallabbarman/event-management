import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Spinner from '../../Spinner/Spinner';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios
            .get('https://eventia.onrender.com/reviews')
            .then((res) => setReviews(res.data))
            .catch((err) => toast.error(err.message));
    }, [reviews]);

    const deleteReview = (_id) => {
        axios
            .delete(`https://eventia.onrender.com/deleteReview/${_id}`)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Successfully delete the review');
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
                            {!reviews.length ? (
                                <Spinner />
                            ) : (
                                reviews.map((review, index) => (
                                    <tr key={review._id}>
                                        <td>{index + 1}</td>
                                        <td>{review.name}</td>
                                        <td>{review.service}</td>
                                        <td>
                                            <Button
                                                variant="outline-danger"
                                                onClick={() => deleteReview(review._id)}
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

export default ManageReviews;

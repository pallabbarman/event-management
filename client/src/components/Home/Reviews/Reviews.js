/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Slider from 'react-slick';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/reviews`)
            .then((res) => setReviews(res.data))
            .catch((error) => toast.error(error.message));
    }, []);

    return (
        <section className="clients-review">
            <Container>
                <h1 className="text-center mt-5 clientsays">What Our Clients Says</h1>
                <Slider {...settings}>
                    {reviews.map((reviewData) => (
                        <Review reviewData={reviewData} key={reviewData._id} />
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Reviews;

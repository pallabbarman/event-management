import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import birth from '../../../images/undraw_Birthday_cake_2wxy.svg';
import party from '../../../images/undraw_Having_fun_re_vj4h.svg';
import wed from '../../../images/undraw_wedding_t1yl.svg';
import Review from '../Review/Review';

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
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
    const reviewData = [
        {
            id: 1,
            name: 'Weeding',
            price: 150,
            img: wed,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 2,
            name: 'Birthday',
            price: 150,
            img: birth,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 3,
            name: 'Party',
            price: 150,
            img: party,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 4,
            name: 'Party',
            price: 150,
            img: party,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
        {
            id: 5,
            name: 'Party',
            price: 150,
            img: party,
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas eius accusamus eum odit animi quasi',
        },
    ];
    return (
        <section className="clients-review">
            <Container>
                <h1 className="text-center mt-5 clientsays">What Our Clients Says</h1>
                <Slider {...settings}>
                    {reviewData.map((review) => (
                        <Review review={review} key={review.id} />
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Reviews;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './hero.component.css';

const Hero = () => {
    return (
        <Carousel fade interval={3000} className="hero-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/tattoo1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to Austin Anderson Tattoo</h3>
                    <p>Capturing art and expression through custom tattoos.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/tattoo2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Book Your Custom Tattoo Session</h3>
                    <p>Explore bold designs and personalized artistry.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/tattoo3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Art That Tells Your Story</h3>
                    <p>Bringing your ideas to life through ink.</p>
                </Carousel.Caption>
            </Carousel.Item>

<Carousel.Item>
    <img
        className="d-block w-100"
        src="/tattoo4.jpg"
        alt="Third slide"
    />
    <Carousel.Caption>
        <h3>Art That Tells Your Story</h3>
        <p>Bringing your ideas to life through ink.</p>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
    <img
        className="d-block w-100"
        src="/tattoo5.jpg"
        alt="Third slide"
    />
    <Carousel.Caption>
        <h3>Art That Tells Your Story</h3>
        <p>Bringing your ideas to life through ink.</p>
    </Carousel.Caption>
</Carousel.Item>
        </Carousel>
    );
};

export default Hero;

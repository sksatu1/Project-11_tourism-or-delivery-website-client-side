import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
// import Carousel from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-container">

            <Carousel>
                <Carousel.Item>
                    <img height="700px"
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1002272/pexels-photo-1002272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>WINTER VACATION</h1>
                        <h3>Life is a beautiful journey not a destination</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="700px"
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>EXPLORE SUMMER VACATION</h1>
                        <h3>Take only memories,leave only footprints</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="700px"
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>JOURNEY TO EXPLORE NATURE</h1>
                        <h3>Journeys are best measured in our life</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Banner;
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
    return (
        <div className="slider">
            <Carousel>
                <Carousel.Item className="slider-item">
                    <div className="slider-item__img">
                        <img
                            className="d-block w-100"
                            src="https://libreshot.com/wp-content/uploads/2018/02/many-old-books.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="slider-item__caption">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-item">
                    <div className="slider-item__img">
                        <img
                            className="d-block w-100"
                            src="https://www.bromleyhouse.org/wp-content/uploads/2018/10/bhl-books.jpg"
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption className="slider-item__caption">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-item">
                    <div className="slider-item__img">
                        <img
                            className="d-block w-100"
                            src="https://reutersinstitute.politics.ox.ac.uk/sites/default/files/inline-images/Bookshelf.jpg"
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption className="slider-item__caption">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
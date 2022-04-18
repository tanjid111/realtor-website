import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h3>West</h3>
                        <p>West by Beedie Living is a celebration of everyday life, where convenience and community come together to offer a lifestyle that is authentically Austin Heights.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"

                    />

                    <Carousel.Caption>
                        <h3>Bastille</h3>
                        <p>Its no secret that the French are naturally elegant and unequivocally cool.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>The Beverly</h3>
                        <p>
                            Quiet yet connected, these luxurious 42 residences are located in one of Surreys most charming established family neighbourhoods, Fraser Heights.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
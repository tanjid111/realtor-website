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
                        <p>West by Beedie Living is a celebration of everyday life, where convenience and community come together to offer a lifestyle that is authentically Austin Heights. Rising above a lively town centre in Coquitlam, homes feature breathtaking river or mountain views.</p>
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
                        <p>It’s no secret that the French are naturally elegant and unequivocally cool — they have that certain je ne sais quoi. Bastille by Porte Homes captures this joie de vivre in 1-3 bedroom condos enveloped in French-inspired architecture — a nod to Coquitlam’s French roots.</p>
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
                            Quiet yet connected, these luxurious 42 residences are located in one of Surrey’s most charming established family neighbourhoods, Fraser Heights. Architecturally inspired by modern design, 4 bedroom townhomes create a new standard of living in a serene setting amongst mature trees – with easy access to Vancouver or the Fraser Valley. Only a five minute drive to shopping, parks and some of the finest schools in the city. The Beverly, by His Grace Homes and Ace Point Homes.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
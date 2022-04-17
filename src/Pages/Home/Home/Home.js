import React from 'react';
import Banner from '../Banner/Banner';
import Neighbourhoods from '../Neighbourhoods/Neighbourhoods';
import RealEstates from '../RealEstates/RealEstates';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RealEstates></RealEstates>
            <Neighbourhoods></Neighbourhoods>
        </div>
    );
};

export default Home;
import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { RealEstateContext } from '../../../App';
import RealEstate from '../RealEstate/RealEstate';

const RealEstates = () => {
    const [realEstates, setRealEstates] = useContext(RealEstateContext);

    useEffect(() => {
        fetch('realEstates.json')
            .then(res => res.json())
            .then(data => setRealEstates(data));
    }, [])
    return (
        <div id='realestates'>
            <h2> Real estates: {realEstates.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    realEstates.map(realEstate => <RealEstate
                        key={realEstate.id}
                        realEstate={realEstate}
                    ></RealEstate>)
                }
            </Row>
        </div>
    );
};

export default RealEstates;
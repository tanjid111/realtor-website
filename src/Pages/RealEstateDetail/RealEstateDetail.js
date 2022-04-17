import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RealEstateContext } from '../../App';

const RealEstateDetail = () => {
    const { id } = useParams()
    const [realEstates] = useContext(RealEstateContext);

    const realEstate = realEstates.find((realEstate) => realEstate.id == id);

    return (
        <div>
            <h2>Welcome to detail: {realEstate.name}</h2>

        </div>
    );
};

export default RealEstateDetail; 
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { RealEstateContext } from '../../App';
import Images from '../Home/Images/Images';

const RealEstateDetail = () => {
    const { id } = useParams()
    const [realEstates] = useContext(RealEstateContext);

    const realEstate = realEstates.find((realEstate) => realEstate.id == id);

    return (
        <div className='container'>
            <h2 className='text-center py-5'>Welcome to: {realEstate.name}</h2>
            <div className='row text-center border'>
                {realEstate.img.map(image => <Images
                    image={image}
                ></Images>)}
            </div>
            <Card className='text-center'>
                <Card.Body>
                    <Card.Title>{realEstate.name}</Card.Title>
                    <Card.Text>{realEstate.price}</Card.Text>
                    <Card.Text>{realEstate.description}</Card.Text>
                    <Button variant="primary">Book Showing</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RealEstateDetail; 
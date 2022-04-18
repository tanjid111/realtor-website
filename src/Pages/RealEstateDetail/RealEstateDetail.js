import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RealEstateContext } from '../../App';
import BookShowing from '../BookShowing/BookShowing';
import Images from '../Home/Images/Images';

const RealEstateDetail = () => {
    const { id } = useParams()
    const [realEstates] = useContext(RealEstateContext);
    const navigate = useNavigate();

    const navigateToBookShowing = (id) => {
        navigate(`/bookshowing/${id}`)
    }

    const realEstate = realEstates.find((realEstate) => realEstate.id == id);

    return (
        <div>
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
                    <Button onClick={() => navigateToBookShowing(id)} variant="primary">Book Showing</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RealEstateDetail; 
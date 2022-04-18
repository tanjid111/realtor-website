import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RealEstate = ({ realEstate }) => {
    const { id, description, img, name, price } = realEstate;
    const navigate = useNavigate();
    const navigateToRealEstateDetail = (id) => {
        navigate(`/realestate/${id}`)
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img[0].img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>
                            {description.length < 100 ? description : description.slice(0, 200)}
                            <span style={{ cursor: 'pointer' }} className='read-more text-primary' onClick={() => navigate(`/realestate/${id}`)}>
                                ...Read More
                            </span>
                        </Card.Text>
                        <Button onClick={() => navigateToRealEstateDetail(id)} variant="primary">Show Details</Button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default RealEstate;
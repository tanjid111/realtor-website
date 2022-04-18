import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Neighbourhood = ({ neighbourhood }) => {
    const { name, description, img, url } = neighbourhood;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <a className='btn btn-primary px-4 py-2 mt-auto' href={url} target="_blank">Explore</a>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Neighbourhood;
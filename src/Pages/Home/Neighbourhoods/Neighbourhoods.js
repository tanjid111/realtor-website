import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Neighbourhood from '../Neighbourhood/Neighbourhood';

const Neighbourhoods = () => {
    const [neighbourhoods, setNeighbourhoods] = useState([]);
    useEffect(() => {
        fetch('neighbourhoods.json')
            .then(res => res.json())
            .then(data => setNeighbourhoods(data));
    }, [])
    return (
        <div id='neighbourhoods'>
            <h2>Neighbourhoods: {neighbourhoods.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    neighbourhoods.map(neighbourhood => <Neighbourhood
                        key={neighbourhood.id}
                        neighbourhood={neighbourhood}
                    ></Neighbourhood>)
                }
            </Row>
        </div >
    );
};

export default Neighbourhoods;
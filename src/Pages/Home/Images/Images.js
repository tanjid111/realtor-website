import React from 'react';

const Images = (props) => {
    const { image } = props;
    return (
        <div className='col-6'>
            <img className='w-100' src={image} alt="" />
        </div>
    );
};

export default Images;
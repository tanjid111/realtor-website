import React from 'react';

const Images = (props) => {
    const { image } = props;
    console.log(image.img);
    return (
        <div className='col-6 my-2'>
            <img className='w-100' src={image.img} alt="" />
        </div>
    );
};

export default Images;
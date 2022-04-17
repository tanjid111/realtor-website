import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-3'>
            <p><small>copyright @{new Date().getFullYear()} All rights reserved.</small></p>
        </footer>
    );
};

export default Footer;
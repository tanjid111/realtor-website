import React from 'react';
import profilepic from '../../images/profilepic.jpg'

const About = () => {
    return (
        <div className='text-center mt-2'>
            <h2 className='py-3'>Name: Syed Tanjid Hossain</h2>
            <img width='200' src={profilepic} alt="" />
            <p>
                {`I'm a full stack developer located in Vancouver Canada. I am an experienced engineer with a newfound passion of working with software.

I love to create simple yet beautiful websites with great user experience.

Looking to apply existing problem-solving abilities as well as develop technical expertise to solve real world software engineering.`}
            </p>
        </div>
    );
};

export default About;
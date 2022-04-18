import React from 'react';
import profilepic from '../../images/profilepic.jpg'

const About = () => {
    return (
        <div className='text-center mt-2'>
            <h2 className='py-3'>Name: Syed Tanjid Hossain</h2>
            <img width='200' src={profilepic} alt="" />
            <p>
                {`I am Mechanical Engineer by profession working full time in a battery
                energy storage solution company in Canada. I have always been curious how a website
                works. Programming isn't really my forte and was scared of it. Jhankar bhaia taught
                this course really well and now I am very confident about my skills. I want to be 
                a successful and a creative web developer! Even after doing a full time job I am going
                with the course flow. I need to finish this course with everyone else and join SCIC 
                to get that extra help from the professionals`}
            </p>
        </div>
    );
};

export default About;
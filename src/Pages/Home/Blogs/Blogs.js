import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>This is blogs section</h2>
            <h2 className='text-danger'> Question1: Difference between authorization and authentication</h2>
            <h4 className='text-primary'>{`Authentication comes before the authorization process.
                During authentication process the user verifies their identity by providing email address and password.
                At times user will need to verify their email address by clicking an email that they will get. Firebase can
                be used for authentication. Authorization process determines what files or data that user has access to.
                Once user is authenticated, then requiredAuth is used to authorize the user to view certain data`}</h4>
            <br />
            <h2 className='text-danger'>Question 2: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <h4 className='text-primary'> {`Firebase is a realtime database where data can be stored across web, android, iOS and are synced. 
            The data is still available even if the user is offline. It provides services like authentication, hosting, database, machine learning, etc
            Other options are AWS Amplify, Parse,Back4App, Kuzzle etc`}</h4>
            <br />
            <h2 className='text-danger'>Question 3: What other services does firebase provide other than authentication?</h2>
            <h4 className='text-primary'> {`Most useful services that firebase provides are cloud firestore, cloud functions, authentication, hosting, 
            cloud storage, google analytics, predictions, cloud messaging, etc`}</h4 >

        </div >
    );
};

export default Blogs; <h2>This is blogs</h2>
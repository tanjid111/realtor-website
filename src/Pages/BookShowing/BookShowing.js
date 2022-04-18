import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { RealEstateContext } from '../../App';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';

const BookShowing = () => {
    const { id } = useParams()
    const [realEstates] = useContext(RealEstateContext);
    const [user, loading] = useAuthState(auth);
    const realEstate = realEstates.find((realEstate) => realEstate.id == id);

    const emailRef = useRef('');
    const userNameRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');

    if (loading) {
        return <Loading></Loading>
    }

    const handleBooking = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const userName = userNameRef.current.value
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        if (address && userName && phone) {
            toast('Booking Confirmed!');
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary'>Fill in the booking form.</h2>
            <h3 className='text-center text-primary'>Booking Showing for Apartment no: {id}</h3>
            <h3 className='text-center text-primary'>{realEstate.name}</h3>
            <div className='text-center'>
                <img className='img-fluid' width="300" src={realEstate.img[0]} alt="" />
            </div>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control ref={emailRef} placeholder={user.email} disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control ref={userNameRef} type="text" placeholder="Username" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Address</Form.Label>
                    <Form.Control ref={addressRef} type="text" placeholder="Address" required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control ref={phoneRef} type="text" placeholder="Phone No" required />
                </Form.Group>


                <Button onClick={handleBooking} variant="primary" type="submit">
                    Submit
                </Button>

                {/* <button className='btn btn-link text-primary text-decoration-none' onClick={handleBooking}>Submit</button> */}
            </Form>
            <ToastContainer />
        </div>
    );
};

export default BookShowing;
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocalLogin/SocialLogin';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;
    const [userError, setUserError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [agree, setAgree] = useState(false)

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;


        if (!/\S+@\S+\.\S+/.test(email)) {
            setUserError('Enter a valid email');
            return;
        };


        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setUserError('Password should contain at least one special character');
            return;
        }

        if (password.length < 6) {
            setUserError('Password should be more than 6 characters')
            return;
        }

        if (password !== confirmPassword) {
            setUserError('You two passwords did not match')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        setUserError('');
        navigate('/home');

    }
    console.log(error);
    return (
        <div className='w-50 mx-auto mt-4'>
            <h2 className='text-primary'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger' style={{ color: 'red' }}>{userError || error?.message}</p>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={() => navigate('/login')}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register; 
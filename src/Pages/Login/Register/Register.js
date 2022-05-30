import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [updateProfile] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        // update User-name
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');
    }
    if (loading) {
        <Loading></Loading>
    }
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p>Error: {error.message}</p>
        </div>
    }
    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='login'>
            <div className='login-form'>
                <h2 className='text-primary text-center'>Please Register</h2>
                <Form onSubmit={handleRegisterSubmit} className='container w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Wanna Register ?" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='my-2'>Already have an account? <Link onClick={navigateLogin} className='text-primary text-decoration-none' to="/login" >Please Login </Link></p>
                    <p className='text-danger'>{errorMessage}</p>
                </Form>
            </div>
            <div className='social-login'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
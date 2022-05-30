import React from 'react';
import './SocialLogin.css';
import google from '../../../Images/Logo/google.png'
import gitHub from '../../../Images/Logo/GitHub-Mark.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialMedia = () => {
    const location = useLocation();
    // using react-firebase-hook for authentication
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (loading || loading2) {
        <Loading></Loading>
    }
    if (error || error2) {
        errorMessage = <p>Error: {error?.message} || {error2?.message}</p>
    }
    const from = location.state?.from?.pathname || "/";
    if (user || user2) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div>
                <p className='text-center'><strong>You can Login Also</strong></p>
            </div>
            <p className='text-danger'>{errorMessage}</p>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='w-50 btn btn-clr mb-2'><img className='pe-2' src={google} alt="" /> Google Login</button><br />
                <button onClick={() => signInWithGithub()} className='w-50 btn btn-clr mb-2'><img className='pe-2' src={gitHub} alt="" /> Github Login</button>
            </div>

        </div>
    );
};

export default SocialMedia;
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
    console.log("User Data: ", user);

    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else if (user.emailVerified === false) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your email is not Verified</h3>
            <h5 className='text-success'>Please verify your Email</h5>
            <button onClick={async () => {
                await sendEmailVerification();
                toast('sent email');
            }}>Send Verification Email again</button>

        </div>
    }

    return children;
};

export default RequireAuth;
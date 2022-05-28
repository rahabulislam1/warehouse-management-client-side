import React from 'react';
import google from '../../../Images/Logo/google.png'
import gitHub from '../../../Images/Logo/GitHub-Mark.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';



export default SocialMedia;
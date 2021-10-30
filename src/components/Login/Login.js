import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/';

    console.log(location?.state?.from);
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
                console.log('got login result')

            })
    }

    return (
        <div className="login-container">
            <div>
                <h3>Please SignIn here </h3>
                <button className="btn btn-danger" onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
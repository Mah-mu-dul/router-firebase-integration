import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>please Login  !! </h3>
            <input onClick={signInWithGoogle} type="submit" style={{margin:20}} value="Google Signin" /><br />
            <input type="email" name="" id="" placeholder='your eamil' /><br />
            <input type="password" placeholder='create password' id="" /><br />
            <input  type="submit" value="Login" />
            </div>
    );
};

export default Login;
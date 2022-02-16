import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
    let location = useLocation();
    return (
        <>
            <h1 style={{textAlign:'center'}}>Login Page</h1>
            <h2 style={{float:'center'}}>{location.state.st}</h2>
        </>
    )
}

export default Login
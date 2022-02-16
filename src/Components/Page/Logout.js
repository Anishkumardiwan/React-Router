import React from 'react';
import { useLocation } from 'react-router-dom';

const Logout = () => {
    let location = useLocation();
    return (
        <>
            <h1 style={{textAlign:'center'}}>Logout Page</h1>
            <h2 style={{textAlign:'center'}}>{location.state.name}</h2>
        </>
    )
}

export default Logout;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1 style={{textAlign:'center'}}>Dashboard Page</h1>
            <button style={{textAlign:'center'}} onClick={()=>{
                navigate("/logout")
            }}>Logout</button>
        </>
    )
}

export default Dashboard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate();
    let data = { name: 'Anish'};
    return (
        <>
            <h1 style={{textAlign:'center'}}>Dashboard Page</h1>
            <button style={{textAlign:'center'}} onClick={()=>{
                navigate("/logout" , {state:data})
            }}>Logout</button>
        </>
    )
}

export default Dashboard;


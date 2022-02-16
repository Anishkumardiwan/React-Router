
import React from 'react';
import { Outlet  } from 'react-router-dom';

const PostLayout = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Post Layout</h1>
            <Outlet />
        </>
    )
}

export default PostLayout;

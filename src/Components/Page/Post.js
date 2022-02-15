
import React from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
    let {category} = useParams();
    return (
        <>
            <h1 style={{textAlign:'center'}}>Post Page: {category}</h1>
        </>
    )
}

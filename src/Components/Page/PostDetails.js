
import React from 'react';
import { useParams , useSearchParams} from 'react-router-dom';

export const PostDetails = () => {
    let {category} = useParams();
    return (
        <>
            <h1 style={{textAlign:'center'}}>Post Details</h1>
            <h1 style={{textAlign:'center'}}>Post Category is : {category}</h1>
        </>
    )
}

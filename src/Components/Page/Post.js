
import React from 'react';
import { useParams , useSearchParams} from 'react-router-dom';

export const Post = () => {
    let {category , id} = useParams();
    let [searchParams , setSearchParams] = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get('price')); //http://localhost:3000/post/mobile/1?price=12020
    console.log(searchParams.get('sort')); //http://localhost:3000/post/mobile/1?price=12020&sort=39382
    return (
        <>
            <h1 style={{textAlign:'center'}}>Post Page: {category}</h1>
            <h1 style={{textAlign:'center'}}>Post Page: {id}</h1>
        </>
    )
}

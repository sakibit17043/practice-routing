import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))

    },[postId])
    return (
        <div>
            <h3>This post is for:{postId}</h3>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
            
        </div>
    );
};

export default PostDetails;
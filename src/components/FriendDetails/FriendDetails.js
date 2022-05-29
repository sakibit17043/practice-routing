import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1>This is detail about dosto:{friendId}</h1>
            <h2>Name : {friend?.name}</h2>
            <h2>Email : {friend?.email}</h2>
            <h4>Website : {friend?.website}</h4>
            <h4>City:{friend?.address.city}</h4>
            <h6>Others:{friend?.company.bs}</h6>
            <h3>Lat:{friend?.address.geo.lat}</h3>
        </div>
    );
};

export default FriendDetails;
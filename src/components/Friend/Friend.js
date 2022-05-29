import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id} = props.friend;
    const navigate = useNavigate();
    const showDetails =()=>{
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
          <h2>{name}</h2> 
          <Link to={'/friend/'+id}>Show Details</Link> 
          <button onClick={showDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;
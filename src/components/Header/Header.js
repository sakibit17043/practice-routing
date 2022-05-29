import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
            <CustomLink to="/countries">Countries</CustomLink>
            <CustomLink to="/other">Other</CustomLink>
        </div>
    );
};

export default Header;
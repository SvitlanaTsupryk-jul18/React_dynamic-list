import React from 'react';
import CommentList from './CommentList';


const User = ({ user, comments }) => (
    <div className="user">
        <span>{user.name}</span>
        <p>{user.email}</p>
        <address>{user.address.city}</address>
        {/* <button type="button">Comments</button> */}
        <CommentList items={comments} />
    </div>
);

export default User;
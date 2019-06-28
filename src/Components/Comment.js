import React from 'react';

const Comment = ({ item }) => (
    <li className="comments_item">
        <p> <span>{item.name}</span>{item.email}</p>
        <p>{item.body}</p>
    </li>
);

export default Comment;
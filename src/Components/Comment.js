import React from 'react';

const Comment = ({ item }) => (
    <li className="comments__item">
        <h3>{item.name}</h3>
        <p>{item.email}</p>
        <p>{item.body}</p>
    </li>
);

export default Comment;
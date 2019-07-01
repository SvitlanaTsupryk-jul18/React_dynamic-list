import React from 'react';
import User from './User'

const Post = ({ item }) => (
    <article>
        <h2>{item.title}</h2>
        <p className="post__text">{item.body}</p>
        <User
            user={item.user}
            comments={item.comments}
        />
    </article>

);

export default Post;
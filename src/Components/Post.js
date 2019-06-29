import React from 'react';
import User from './User'

const Post = ({ item }) => (
    <article className="post_item" >
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <User
            user={item.user}
            comments={item.comments}
        />
    </article>

);

export default Post;
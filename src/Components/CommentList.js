import React from 'react';
import Comment from './Comment'

const CommentList = ({ items }) => (
    <ul className="comments">

        {items.map(item => (
            <Comment key={item.id} item={item} />
        ))}

    </ul>
);

export default CommentList;
import React from 'react';
import Comment from './Comment'

const CommentList = ({ items, classShow }) => (
    <ul className={classShow ? "comments show" : "comments"}>

        {
            items.map(item => (
                <Comment key={item.id} item={item} />
            ))
        }

    </ul >
);

export default CommentList;
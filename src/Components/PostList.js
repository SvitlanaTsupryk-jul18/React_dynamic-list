import React from 'react';
import Post from './Post'

const PostList = ({ items, setFilterQuery, value }) => (
  items.length ?
    (<div className="posts">
      <input className="filter"
        placeholder="What do you want to find?"
        autoFocus={true}
        query={value}
        onChange={setFilterQuery}>
      </input>
      {items.map(item => (
        <Post key={item.id} item={item} />
      ))}

    </div >)
    : (<span className="warning">Sorry!Nothing found</span>)
);

export default PostList;

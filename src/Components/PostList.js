import React from 'react';
import Post from './Post'

const PostList = ({ items, setFilterQuery, value }) => (
  <div className="posts">
    {/* <form onSubmit={this.filterPosts}> */}
    <input className="filter"
      placeholder="What do you want to find?"
      autoFocus={true}
      query={value}
      onChange={setFilterQuery}>
    </input>
    {/* </form> */}

    {items.map(item => (
      <Post key={item.id} item={item} />
    ))}

  </div >
);

export default PostList;

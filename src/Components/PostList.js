import React from 'react';
import Post from './Post'

const PostList = ({ items }) => (
  <div className="posts">
    {/* <form onSubmit={this.addItem}>
      <input className="newTodo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={this.state.currentValue}
        onChange={this.setValue}>
      </input>
    </form> */}

    {items.map(item => (
      <Post key={item.id} item={item} />
    ))}

  </div>
);

export default PostList;

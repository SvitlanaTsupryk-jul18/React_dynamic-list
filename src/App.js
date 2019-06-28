import React from 'react';
import './App.css';

import PostList from './Components/PostList';
import { getPosts, getUsers, getComments } from './api';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filterValue: '',
      isLoaded: false,
      disabled: false
    };

    // this.handleFilter = (filterValue) => {
    //   this.setState({ filterValue });
    // };
  }

  getPosts(todos, users, comments) {
    return todos.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id)
    }));
  }

  loadData = async () => {
    this.setState({ disabled: true });

    const [posts, users, comments] = await Promise.all([
      getPosts(),
      getUsers(),
      getComments()
    ]);

    const items = this.getPosts(posts, users, comments);

    this.timerId = setTimeout(() => {
      this.setState({
        posts: items,
        isLoaded: true,
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }


  // sortTodos(todos, sortField) {
  //   const callbackMap = {
  //     [SORT_ORDER_TITLE]: (a, b) => a.title.localeCompare(b.title),
  //     [SORT_ORDER_USER]: (a, b) => a.user.name.localeCompare(b.user.name),
  //     [SORT_ORDER_COMPLETED]: (a, b) => a.completed - b.completed,
  //   };

  //   const callback = callbackMap[sortField] || callbackMap[SORT_ORDER_TITLE];

  //   return todos.sort(callback);
  // }

  render() {
    const { posts, isLoaded, filterValue } = this.state;
    // const visiblePosts = this.sortTodos(posts, sortField);
    const visiblePosts = posts;

    return (
      <div className="App">
        <h1>
          Dynamic list of  {posts.length} Posts
         </h1>

        {isLoaded ? (
          <PostList
            items={visiblePosts}
          // filterPosts={this.filterPosts}
          />
        ) : (
            <button
              onClick={this.loadData}
              className="btn_load"
              disabled={this.state.disabled}
            >
              {this.state.disabled ? "Loading..." : "Load"}
            </button>
          )}
      </div>
    );
  }
}

export default App;

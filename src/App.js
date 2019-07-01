import React from 'react';
import './App.css';

import PostList from './Components/PostList';
import { getPosts, getUsers, getComments } from './api';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      query: '',
      isLoaded: false,
      disabled: false,
      show: false
    };
  }

  setFilterQuery = (event) => {
    this.setState({ query: event.target.value });
  };

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

    setTimeout(() => {
      this.setState({
        posts: items,
        isLoaded: true,
      });
    }, 500);
  };

  filterPosts(posts, query) {
    return posts && posts.filter(post => post.title.includes(query) || post.body.includes(query));
  }

  render() {
    const { posts, isLoaded, query } = this.state;
    const visiblePosts = this.filterPosts(posts, query);
    return (
      <div className="App">
        <h1>
          Dynamic list of  {posts.length} Posts
         </h1>

        {isLoaded ? (
          <PostList
            items={visiblePosts}
            setFilterQuery={this.setFilterQuery}
            value={this.state.query}
          />
        ) : (
            <button
              onClick={this.loadData}
              className="btn btn--load"
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

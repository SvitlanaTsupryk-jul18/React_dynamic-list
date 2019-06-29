import React from 'react';
import CommentList from './CommentList';



class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
        this.showComments = () => {
            this.setState(prevState => ({
                show: !prevState.show
            }))
        }
    }

    render() {
        const { user, comments } = this.props
        return (
            <div className="user">
                <div className="user__info">
                    <span>autor : {user.name}</span>
                    <p>email : {user.email}</p>
                    <address>address : {user.address.city}</address>
                </div>
                <button className="btn--show" onClick={this.showComments} >{this.state.show ? "Hide " : "Show "}comments</button>
                <CommentList items={comments} classShow={this.state.show} />
            </div>)
    }
}

export default User;
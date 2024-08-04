import React, { Component } from 'react'
import NewComment from '../components/NewComment/NewComment'
import 'bootstrap-css-only'
import Comments from '../components/Comments/Comments'

class CommentSys extends Component {
  constructor(props) {
    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {},
      isAnonymous: false
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        this.setState({
          isLoggedIn: true, user,
          isAnonymous: false,

        })
      } else {
        this.setState({
          isLoggedIn: false, user: {}
        })
      }
    })
  }

  postNewComment(comment) {
    if (this.state.isAnonymous) {
      comment.user = {
        name: comment.name,
        uid: Date.now()
      }
    } else {
      comment.user = {
        name: this.state.user.displayName,
        uid: this.state.user.uid
      }
    }

    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({ comments })
  }

  auth(provider) {
    if (provider == 'facebook') {
      this.props.auth.signInWithPopup(this.props.providers[provider]).then(function (result) {
        // This gives you a Facebook Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if (user) {
          this.setState({
            isLoggedIn: true, user,
            isAnonymous: false,

          });
        }
      });

    } else {
      this.props.auth.signInWithPopup(this.props.providers[provider])
        .then((r) => console.log(r))
        .catch((err) => {
          if (err.code === 'auth/account-exists-with-different-credential') {
            alert('There is a user created with this credentials!. Please, try to login with Google!')
          }
        })

    }

  }

  authAnonymous() {
    this.setState({
      isAnonymous: true,
      user: {

      }
    })
  }

  logout() {
    if (window.confirm("Do you really want to leave?")) {
      this.props.auth.signOut()
    }
  }

  render() {
    return (
      <div className="container" style={{
        paddingRight: '0px',
        paddingLeft: '0px'
      }}>
        <h2 style={{ textAlign: 'center' }}>Lời chúc mừng!!!{this.state.isLoggedIn && <button style={{ marginLeft: 50 }} onClick={() => this.logout()} className="btn btn-link">Đăng xuất</button>}</h2>
        <div style={{ textAlign: 'center' }} >
          {!this.state.isLoggedIn && <div className="alert alert-info">
            <button className="btn btn-info" onClick={() => this.auth('facebook')}>Đăng nhập bằng Facebook</button>
            <button style={{ marginLeft: 10 }} className="btn btn-info" onClick={() => this.auth('google')}>Đăng nhập bằng Google</button>
            <button style={{ marginLeft: 10 }} className="btn btn-info" onClick={() => this.authAnonymous()}>Người ẩn danh</button>
          </div>}
          {(this.state.isLoggedIn || this.state.isAnonymous) && <NewComment isAnonymous={this.state.isAnonymous} postNewComment={this.postNewComment} />}
        </div>
        <Comments isAnonymous={this.state.isAnonymous} comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentSys

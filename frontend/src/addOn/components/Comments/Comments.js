import React, { Component } from 'react'
import Comment from './Comment/Comment';

export default class Comments extends Component {
    renderComment(key, comment) {
        return (
            <Comment key={key} comment={comment} id={key} isAnonymous={this.props.isAnonymous} />
        )
    }
    render() {
        return (
            <div className="mt-3 px-4 py-3" id="show-comments">
                {Object.keys(this.props.comments).map(key => this.renderComment(key, this.props.comments[key]))}
            </div>
        )
    }
}

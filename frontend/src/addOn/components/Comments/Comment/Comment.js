import React, { Component } from 'react'
import base, { auth } from '../../../../pages/base'
import { ColorFactory } from 'antd/es/color-picker/color'

export default class Comment extends Component {
    deleteComment(key) {
        if (this.props.isAnonymous) {
            alert('Bạn không thể xóa comment!')
            return
        }

        if (this.props.comment.name) {
            alert('Comment này không thể xóa!')
            return
        }

        if (!auth.currentUser) {
            alert('Bạn phải đăng nhập để có thể xóa comment!')
            return
        }


        if (window.confirm("Bạn có muốn xóa comment này?")) {
            const commentUser = this.props.comment.user.uid
            const user = auth.currentUser.uid

            if (user === commentUser) {
                base.remove(`/comments/${key}`)
                    .catch(() => alert("There was an error trying to delete the comment. Check your internet status!"))
            } else {
                alert('Bạn chỉ có thể xóa comment của mình!')
            }
        }


    }
    render() {
        return (
            <div class="commentCssChild" style={{textAlign: 'left'}}>
                <div class="comment1">
                <button style={{    position: 'relative',
    bottom: '17px',
    left: '11px',}}  type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
                        <span style={{color: 'black'}} aria-hidden="true">x</span>
                    </button>
                <p style={{fontSize:'14px', color:'rgb(87 76 76)'}} id="comment-detail" class="m-0">
                  {this.props.comment.comment}
                  </p>
                </div>
                <div class="comment2">
            <div class="nameComment">{this.props.comment.user?.name}</div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" focusable="false" class="chakra-icon css-1kxx4bz" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path></svg>
                </div>
                 
                 
            </div>
        )
    }
}





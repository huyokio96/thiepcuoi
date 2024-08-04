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
            <div class="box-comment pb-3" style={{textAlign: 'left'}}>
            <h4 id="user-name-comment" style={{fontSize:'17px'}} class="mt-1">{this.props.comment.user?.name}</h4>
                  <p style={{fontSize:'13px', color:'rgb(87 76 76)'}} id="comment-detail" class="m-0">
                  {this.props.comment.comment}
                  </p>
                  <button style={{position: 'relative',
    bottom: '55px'}}  type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
                        <span style={{color: 'black'}} aria-hidden="true">x</span>
                    </button>
            </div>
            // <div className="card">
            //     <span className="card-body" style={{color: 'black'}}>
            //         <span style={{marginRight: 10, color: 'black'}}>{this.props.comment.user.name}:</span>
            //         <span style={{ marginLeft: 0, color: 'black', fontSize: 'small', fontWeight: 'lighter' }}>
            //             {this.props.comment.comment}
            //         </span>
            //         <button  type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
            //             <span style={{color: 'black'}} aria-hidden="true">x</span>
            //         </button>
            //     </span>
            // </div>

        )
    }
}





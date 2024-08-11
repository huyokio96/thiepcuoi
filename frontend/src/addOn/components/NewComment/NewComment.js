import React, { Component } from 'react';
import EmojiPicker from 'emoji-picker-react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const styles = {
    container: {
        padding: 20,
        borderTop: "1px #4C758F solid",
        marginBottom: 20
    },
    form: {
        display: "flex"
    },
    input: {
        color: "inherit",
        background: "none",
        outline: "none",
        border: "none",
        flex: 1,
        fontSize: 16
    },
    getEmojiButton: {
        cssFloat: "right",
        border: "none",
        margin: 0,
        cursor: "pointer"
    },
    emojiPicker: {
        position: 'absolute',
        zIndex: '200',
        width: '30vh',
    }
}

export default class NewComment extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
        this.length = this.length.bind(this)
    }
    state = {
        maxChars: 240,
        written: 0,
        isValidateName: false,
        isValidateComment: false,
        showEmojis: false,
    }

    showEmojis = (e) => {
        console.log(this.emojiPicker)

        this.setState({ showEmojis: true })

    }

    closeMenu = (e) => {
 
            this.setState(
                {
                    showEmojis: false
                }
            )
    }

    addEmoji = (e) => {
        console.log(e.native);
        let emoji = e.native;

        this.refs.comment.value += emoji;
       this.length();
    }

    handleEnter(command) {

        if (command === 'clear') {
            this.refs.comment.value = '';
            if (this.props.isAnonymous) this.refs.name.value = '';
            this.setState({ written: 0 })
        } else {
            if (this.refs?.name?.value == '') { this.setState({ isValidateName: true }); }
            else {
                this.setState({ isValidateName: false });
            }
            if (this.refs?.comment?.value == '') { this.setState({ isValidateComment: true }); }
            else {
                this.setState({ isValidateComment: false });
            }
            if (this.refs?.name?.value == '' || this.refs.comment.value == '') return;
            if (this.props.isAnonymous) {
                this.props.postNewComment({
                    comment: this.refs.comment.value,
                    name: this.refs.name.value
                })
            } else {
                this.props.postNewComment({
                    comment: this.refs.comment.value,
                })
            }
            this.setState({ written: 0 })
            this.refs.comment.value = '';
            if (this.props.isAnonymous) this.refs.name.value = '';
        }
    }

    length() {
        let count = this.refs.comment.value.length
        this.setState({
            written: count
        })
    }

    render() {
        return (
            <div comment className="row" id="wish-form" class="p-4" style={{ margin: 10 }}>
                <div class="col-auto mb-3" style={{ display: 'math' }}>
                    {this.props.isAnonymous &&
                        <div class="col-auto mb-3 d-flex">
                            <div style={this.state.isValidateName ? { border: '2px solid red', width: '100%' } : { width: '100%', border: 'unset' }}>
                                <input ref="name" id="name-comment" type="text" class="form-control border-0" placeholder="Nhập tên của bạn" />
                            </div>
                        </div>}
                    <textarea
                        style={this.state.isValidateComment ? { border: '2px solid red' } : { border: 'unset' }}
                        onKeyUp={this.length}
                        maxLength={this.state.maxChars}
                        ref="comment"
                        placeholder="Hãy viết gì đó!!"
                        className="form-control">
                    </textarea>
                    {this.state.showEmojis ? (
                        <span
                            ref={(el) => (this.emojiPicker = el)}
                        >
                            <Picker
                            data={data}
                            onEmojiSelect={this.addEmoji}
                            onClickOutside={this.closeMenu}
                                emojiTooltip={true}
                                title="weChat"
                                dynamicWidth={true}
                            />
                        </span>
                    ) : (
                        <p style={styles.getEmojiButton} onClick={this.showEmojis}>
                            {String.fromCodePoint(0x1f60a)}
                        </p>
                    )}
                    {/* <svg style={{ width: '25px' }} onClick={() => this.handleopenemoji()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style={{ fill: '#f8de40' }} /><path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style={{ fill: '#e7c930' }} /><path class="c" d="M9.58 6.983A1.528 1.528 0 0 0 7.5 7.1l-.449.45L6.6 7.1a1.529 1.529 0 0 0-2.083-.113 1.472 1.472 0 0 0-.058 2.136L6.68 11.34a.518.518 0 0 0 .737 0l2.22-2.221a1.471 1.471 0 0 0-.057-2.136zM19.483 6.983A1.528 1.528 0 0 0 17.4 7.1l-.449.45-.451-.45a1.529 1.529 0 0 0-2.083-.113 1.471 1.471 0 0 0-.057 2.136l2.221 2.221a.517.517 0 0 0 .736 0l2.221-2.221a1.472 1.472 0 0 0-.055-2.14z" /><path d="M16.666 12.583H7.334a.493.493 0 0 0-.492.544c.123 1.175.875 3.842 5.158 3.842s5.035-2.667 5.158-3.842a.493.493 0 0 0-.492-.544z" style={{ fill: '#864e20' }} /><path class="c" d="M12 16.969a6.538 6.538 0 0 0 2.959-.6 1.979 1.979 0 0 0-1.209-.853c-1.344-.3-1.75.109-1.75.109s-.406-.406-1.75-.109a1.979 1.979 0 0 0-1.209.853 6.538 6.538 0 0 0 2.959.6z" /></svg>
                    <EmojiPicker lazyLoadEmojis={true}
                        width={'35vh'}
                        height={'50vh'}
                        onEmojiClick={(x) => { console.log(x); this.refs.comment.value += x.emoji }}
                        open={this.state.openEmoji} /> */}
                </div>
                <a style={{ fontSize: 'small', marginTop: 3, marginLeft: 5 }}>Kí tự tối đa: {this.state.maxChars - this.state.written}</a>
                <div class="col-auto text-center" style={{ marginTop: 10, textAlign: 'right', width: '100%' }}>
                    <button className="btn btn-outline-info" onClick={() => this.handleEnter('clear')} style={{ marginRight: 20 }}>Xóa</button>
                    <button className="btn btn-primary p-2 w-50 btn btn-danger border-0" onClick={this.handleEnter}>Gửi</button>
                </div>
            </div>
        )
    }
}


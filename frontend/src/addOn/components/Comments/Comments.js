import React, { Component } from 'react'
import Comment from './Comment/Comment';
import $ from 'jquery';

export default class Comments extends Component {
    state = {
        scrollToBot: false,
    }
    renderComment(key, comment) {
        return (
            <Comment key={key} comment={comment} id={key} isAnonymous={this.props.isAnonymous} />
        )
    }
    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { this.setState({scrollToBot: true}) } else {
            this.setState({scrollToBot: false})
        }
      }
    render() {
        return (
            <div style={{}} onScroll={this.handleScroll} className="commentCss" id="show-comments">
                {Object.keys(this.props.comments).map(key => this.renderComment(key, this.props.comments[key]))}
                {!this.state.scrollToBot && <ul class="" style={{ opacity: 0.4
                    ,transition: 'opacity 0.3s ease-in-out',
                    position: 'absolute',
                    bottom: '23px'
                 }} >
                    {/* <a href="#section05"><span></span>Scroll</a> */}
                    <li class="text-center">
                        <a id="section05" class="text-white buttonDonate aos-init aos-animate">
                            <span class="content-button tooltipBtn">
                                <img style={{
                                    height: '17px',
                                    width: '18px',
                                }} class="access-icon" src="../assets/images/down-arrow.png" alt="" />
                            </span>
                        </a>
                    </li>
                </ul>}
            </div>
        )
    }
   
}



import React from 'react';
import "./post.css"
import { MoreVert } from '@material-ui/icons';
export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="podtTopLeft">
                    <img className='postProfileImg' src="/assets/person/1.jpg" alt="" />
                    <span className="postUsername">Mr Patrick</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="podtTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post:)</span>
                <img className='postImg' src="/assets/person/20.png" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/post/like.png" alt="" />
                    <img className='heartIcon' src="/assets/post/heart.jpg" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                  <span className="postCommentText">9 Comments</span>  
                </div>
            </div>
        </div>
    </div>
  )
}

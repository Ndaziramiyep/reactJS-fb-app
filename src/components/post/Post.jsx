import React, { useState } from 'react';
import "./post.css"
import { MoreVert, ThumbUp, ChatBubbleOutline, Share, Send } from '@mui/icons-material';

const POSTS = [
  {
    id: 1,
    user: "Mr Patrick",
    img: "/assets/person/1.jpg",
    postImg: "/assets/person/20.png",
    text: "Hey! It's my first post 🎉 Welcome to my page!",
    date: "5 mins ago",
    likes: 32,
    comments: [
      { id: 1, user: "Sarah Johnson", avatar: "/assets/person/2.jpg", text: "Awesome post! 🔥" },
      { id: 2, user: "Mike Williams", avatar: "/assets/person/3.jpg", text: "Welcome to the platform!" },
    ],
  },
  {
    id: 2,
    user: "Sarah Johnson",
    img: "/assets/person/2.jpg",
    postImg: "/assets/person/20.png",
    text: "Beautiful day outside! ☀️ Hope everyone is having a great time.",
    date: "20 mins ago",
    likes: 18,
    comments: [
      { id: 1, user: "Emily Davis", avatar: "/assets/person/4.jpg", text: "Looks amazing! 😍" },
    ],
  },
  {
    id: 3,
    user: "Mike Williams",
    img: "/assets/person/3.jpg",
    postImg: null,
    text: "Just finished a 10km run! 💪 Feeling great. Who else is into fitness?",
    date: "1 hour ago",
    likes: 45,
    comments: [],
  },
];

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState("");
  const [shares, setShares] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([...comments, { id: Date.now(), user: "Mr Patrick", avatar: "/assets/person/1.jpg", text: commentText }]);
    setCommentText("");
  };

  const handleShare = () => setShares(shares + 1);

  return (
    <div className="post">
      <div className="postWrapper">

        {/* Top */}
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={post.img} alt="" />
            <div className="postUserInfo">
              <span className="postUsername">{post.user}</span>
              <span className="postDate">{post.date}</span>
            </div>
          </div>
          <div className="postTopRight" onClick={() => setShowMenu(!showMenu)}>
            <MoreVert className="postMoreIcon" />
            {showMenu && (
              <div className="postMenu">
                <span className="postMenuItem">Save post</span>
                <span className="postMenuItem">Hide post</span>
                <span className="postMenuItem">Report</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="postCenter">
          {post.text && <span className="postText">{post.text}</span>}
          {post.postImg && <img className="postImg" src={post.postImg} alt="" />}
        </div>

        {/* Stats row */}
        <div className="postStats">
          <span className="postStatItem">
            <span className="postLikeEmoji">👍</span> {likeCount}
          </span>
          <span className="postStatItem" onClick={() => setShowComments(!showComments)}>
            {comments.length} Comments
          </span>
          <span className="postStatItem">{shares} Shares</span>
        </div>

        <hr className="postHr" />

        {/* Action buttons */}
        <div className="postActions">
          <button className={`postActionBtn ${liked ? "liked" : ""}`} onClick={handleLike}>
            <ThumbUp fontSize="small" /> Like
          </button>
          <button className="postActionBtn" onClick={() => setShowComments(!showComments)}>
            <ChatBubbleOutline fontSize="small" /> Comment
          </button>
          <button className="postActionBtn" onClick={handleShare}>
            <Share fontSize="small" /> Share
          </button>
        </div>

        {/* Comments section */}
        {showComments && (
          <div className="postComments">
            <hr className="postHr" />
            {comments.map(c => (
              <div className="postComment" key={c.id}>
                <img src={c.avatar} alt="" className="postCommentAvatar" />
                <div className="postCommentBubble">
                  <span className="postCommentUser">{c.user}</span>
                  <span className="postCommentText">{c.text}</span>
                </div>
              </div>
            ))}
            <form className="postCommentForm" onSubmit={handleComment}>
              <img src="/assets/person/1.jpg" alt="" className="postCommentAvatar" />
              <input
                className="postCommentInput"
                placeholder="Write a comment..."
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
              />
              <button type="submit" className="postCommentSend"><Send fontSize="small" /></button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

export default function Post() {
  return (
    <>
      {POSTS.map(p => <PostCard key={p.id} post={p} />)}
    </>
  );
}

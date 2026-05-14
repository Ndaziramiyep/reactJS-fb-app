import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import './ProfilePage.css';

const profilePosts = [
  { id: 1, text: "Hey! It's my first post 🎉", img: "/assets/person/20.png", likes: 32, comments: 9, date: "5 mins ago" },
  { id: 2, text: "Great day with friends! 😊", img: null, likes: 14, comments: 3, date: "2 days ago" },
];

export default function ProfilePage() {
  const { setActivePage } = useApp();
  const [activeTab, setActiveTab] = useState('posts');
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="profilePage">
      {/* Cover + Avatar */}
      <div className="profileCover">
        <div className="profileCoverBg" />
        <div className="profileAvatarWrapper">
          <img src="/assets/person/1.jpg" alt="" className="profileAvatar" />
        </div>
      </div>

      {/* Info */}
      <div className="profileInfo">
        <h2 className="profileName">Mr Patrick</h2>
        <p className="profileBio">Living life one post at a time 🌍</p>
        <div className="profileStats">
          <div className="profileStat"><span className="profileStatNum">128</span><span className="profileStatLabel">Posts</span></div>
          <div className="profileStat"><span className="profileStatNum">342</span><span className="profileStatLabel">Friends</span></div>
          <div className="profileStat"><span className="profileStatNum">1.2K</span><span className="profileStatLabel">Followers</span></div>
        </div>
        <div className="profileActions">
          <button className="profileBtn profileBtnPrimary">+ Add to Story</button>
          <button className="profileBtn profileBtnSecondary" onClick={() => setActivePage('feed')}>✏️ Edit Profile</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="profileTabs">
        {['posts', 'about', 'friends', 'photos'].map(tab => (
          <button
            key={tab}
            className={`profileTab ${activeTab === tab ? 'activeTab' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="profileContent">
        {activeTab === 'posts' && (
          <div className="profilePosts">
            {profilePosts.map(p => (
              <div className="profilePostCard" key={p.id}>
                <div className="profilePostHeader">
                  <img src="/assets/person/1.jpg" alt="" className="profilePostAvatar" />
                  <div>
                    <span className="profilePostUser">Mr Patrick</span>
                    <span className="profilePostDate">{p.date}</span>
                  </div>
                </div>
                <p className="profilePostText">{p.text}</p>
                {p.img && <img src={p.img} alt="" className="profilePostImg" />}
                <div className="profilePostStats">
                  <span>👍 {liked[p.id] ? p.likes + 1 : p.likes}</span>
                  <span>{p.comments} Comments</span>
                </div>
                <hr className="profilePostHr" />
                <div className="profilePostActions">
                  <button className={`profilePostBtn ${liked[p.id] ? 'liked' : ''}`} onClick={() => toggleLike(p.id)}>👍 Like</button>
                  <button className="profilePostBtn">💬 Comment</button>
                  <button className="profilePostBtn">↗ Share</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'about' && (
          <div className="profileAbout">
            <div className="aboutCard">
              <h3>About</h3>
              <p>📍 Lives in <strong>New York, USA</strong></p>
              <p>🎓 Studied at <strong>MIT</strong></p>
              <p>💼 Works at <strong>Tech Corp</strong></p>
              <p>❤️ Relationship: <strong>Single</strong></p>
              <p>🎂 Birthday: <strong>March 17</strong></p>
            </div>
          </div>
        )}
        {activeTab === 'friends' && (
          <div className="profileFriendsGrid">
            {[2,3,4,5,6,7].map(n => (
              <div className="profileFriendCard" key={n}>
                <img src={`/assets/person/${n}.jpg`} alt="" className="profileFriendImg" />
                <span className="profileFriendName">Friend {n}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'photos' && (
          <div className="profilePhotosGrid">
            {[1,2,3,4,5,6].map(n => (
              <img key={n} src={`/assets/person/${n}.jpg`} alt="" className="profilePhotoThumb" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

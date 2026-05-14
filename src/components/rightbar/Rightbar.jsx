import React from 'react';
import { useApp } from '../../context/AppContext';
import "./rightbar.css";

const suggestions = [
  { id: 3, name: "James Brown", img: "/assets/person/5.jpg", mutual: 4 },
  { id: 4, name: "Anna Smith",  img: "/assets/person/6.jpg", mutual: 7 },
  { id: 5, name: "Chris Lee",   img: "/assets/person/7.jpg", mutual: 2 },
];

const contacts = [
  { id: 1, name: "Sarah Johnson", img: "/assets/person/2.jpg", online: true },
  { id: 2, name: "Mike Williams", img: "/assets/person/3.jpg", online: true },
  { id: 6, name: "Tom Clark",     img: "/assets/person/9.jpg", online: false },
  { id: 7, name: "Nina Brown",    img: "/assets/person/2.jpg", online: true },
  { id: 8, name: "Jake Miller",   img: "/assets/person/3.jpg", online: false },
];

export default function Rightbar() {
  const { friends, addFriend, removeFriend, setOpenChat } = useApp();

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">

        {/* People You May Know */}
        <div className="rightbarSection">
          <h4 className="rightbarTitle">People You May Know</h4>
          {suggestions.map(user => {
            const isFriend = friends.includes(user.id);
            return (
              <div className="rightbarSuggestion" key={user.id}>
                <img src={user.img} alt={user.name} className="rightbarSuggestionImg" />
                <div className="rightbarSuggestionInfo">
                  <span className="rightbarSuggestionName">{user.name}</span>
                  <span className="rightbarSuggestionMutual">{user.mutual} mutual friends</span>
                </div>
                <button
                  className={`rightbarAddBtn ${isFriend ? 'rightbarFriendBtn' : ''}`}
                  onClick={() => isFriend ? removeFriend(user.id) : addFriend(user.id)}
                >
                  {isFriend ? '✓ Friends' : 'Add Friend'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Contacts */}
        <div className="rightbarSection">
          <h4 className="rightbarTitle">Contacts</h4>
          {contacts.map(user => (
            <div
              className="rightbarContact"
              key={user.id}
              onClick={() => setOpenChat({ id: user.id, name: user.name, img: user.img })}
            >
              <div className="rightbarContactImgWrapper">
                <img src={user.img} alt={user.name} className="rightbarContactImg" />
                {user.online && <span className="onlineBadge" />}
              </div>
              <span className="rightbarContactName">{user.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

import React, { useRef, useEffect } from 'react';
import { Person, Chat, Notifications, Search } from "@material-ui/icons";
import { useApp } from '../../context/AppContext';
import "./topbar.css";

const friendRequests = [
  { id: 10, name: "Tom Clark", img: "/assets/person/9.jpg", mutual: 3 },
  { id: 11, name: "Nina Brown", img: "/assets/person/2.jpg", mutual: 5 },
  { id: 12, name: "Jake Miller", img: "/assets/person/3.jpg", mutual: 1 },
];

const notifications = [
  { id: 1, text: "Sarah Johnson liked your post.", img: "/assets/person/2.jpg", time: "2m ago" },
  { id: 2, text: "Mike Williams commented on your photo.", img: "/assets/person/3.jpg", time: "15m ago" },
  { id: 3, text: "Emily Davis sent you a friend request.", img: "/assets/person/4.jpg", time: "1h ago" },
  { id: 4, text: "James Brown shared your post.", img: "/assets/person/5.jpg", time: "3h ago" },
  { id: 5, text: "Anna Smith tagged you in a photo.", img: "/assets/person/6.jpg", time: "5h ago" },
];

export default function Topbar() {
  const {
    setActivePage,
    showNotifications, setShowNotifications,
    showFriendRequests, setShowFriendRequests,
    showProfileMenu, setShowProfileMenu,
    showMessages, setShowMessages,
    setOpenChat,
  } = useApp();

  const ref = useRef();

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowNotifications(false);
        setShowFriendRequests(false);
        setShowProfileMenu(false);
        setShowMessages(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggle = (setter, current, others) => {
    others.forEach(s => s(false));
    setter(!current);
  };

  return (
    <div className="topbarContainer" ref={ref}>
      {/* Left */}
      <div className="topbarLeft">
        <span className="logo" onClick={() => setActivePage('feed')}>Mr Patrick</span>
      </div>

      {/* Center */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input placeholder="Search Facebook" className="searchInput" />
        </div>
      </div>

      {/* Right */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={() => setActivePage('feed')}>Home</span>
          <span className="topbarLink" onClick={() => setActivePage('profile')}>Profile</span>
        </div>

        <div className="topbarIcons">
          {/* Friend Requests */}
          <div className="topbarIconItem" onClick={() => toggle(setShowFriendRequests, showFriendRequests, [setShowNotifications, setShowProfileMenu])}>
            <Person />
            <span className="topbarIconBadge">{friendRequests.length}</span>
            {showFriendRequests && (
              <div className="topbarDropdown">
                <h4 className="dropdownTitle">Friend Requests</h4>
                {friendRequests.map(r => (
                  <div className="dropdownFriendItem" key={r.id}>
                    <img src={r.img} alt={r.name} className="dropdownAvatar" />
                    <div className="dropdownInfo">
                      <span className="dropdownName">{r.name}</span>
                      <span className="dropdownSub">{r.mutual} mutual friends</span>
                      <div className="dropdownActions">
                        <button className="dropdownConfirm">Confirm</button>
                        <button className="dropdownDelete">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Messenger */}
          <div className="topbarIconItem" onClick={() => toggle(setShowMessages, showMessages, [setShowFriendRequests, setShowNotifications, setShowProfileMenu])}>
            <Chat />
            <span className="topbarIconBadge">2</span>
            {showMessages && (
              <div className="topbarDropdown">
                <h4 className="dropdownTitle">Messages</h4>
                {[
                  { id: 1, name: "Sarah Johnson", img: "/assets/person/2.jpg", msg: "Hey! How are you?", time: "2m ago", unread: true },
                  { id: 2, name: "Mike Williams", img: "/assets/person/3.jpg", msg: "See you tomorrow!", time: "20m ago", unread: true },
                  { id: 3, name: "Emily Davis", img: "/assets/person/4.jpg", msg: "Thanks for the help 😊", time: "1h ago", unread: false },
                  { id: 4, name: "James Brown", img: "/assets/person/5.jpg", msg: "Did you see the game?", time: "3h ago", unread: false },
                ].map(m => (
                  <div
                    className={`dropdownMsgItem ${m.unread ? 'unread' : ''}`}
                    key={m.id}
                    onClick={() => { setOpenChat({ id: m.id, name: m.name, img: m.img }); setShowMessages(false); }}
                  >
                    <div className="dropdownMsgImgWrapper">
                      <img src={m.img} alt={m.name} className="dropdownAvatar" />
                    </div>
                    <div className="dropdownInfo">
                      <span className="dropdownName">{m.name}</span>
                      <span className="dropdownSub">{m.msg}</span>
                      <span className="dropdownTime">{m.time}</span>
                    </div>
                    {m.unread && <span className="dropdownUnreadDot" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="topbarIconItem" onClick={() => toggle(setShowNotifications, showNotifications, [setShowFriendRequests, setShowProfileMenu])}>
            <Notifications />
            <span className="topbarIconBadge">{notifications.length}</span>
            {showNotifications && (
              <div className="topbarDropdown">
                <h4 className="dropdownTitle">Notifications</h4>
                {notifications.map(n => (
                  <div className="dropdownNotifItem" key={n.id}>
                    <img src={n.img} alt="" className="dropdownAvatar" />
                    <div className="dropdownInfo">
                      <span className="dropdownName">{n.text}</span>
                      <span className="dropdownSub">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Profile */}
        <div className="topbarProfileWrapper" onClick={() => toggle(setShowProfileMenu, showProfileMenu, [setShowFriendRequests, setShowNotifications])}>
          <img src="/assets/person/1.jpg" alt="" className="topbarImage" />
          {showProfileMenu && (
            <div className="topbarDropdown topbarProfileMenu">
              <div className="profileMenuUser" onClick={() => setActivePage('profile')}>
                <img src="/assets/person/1.jpg" alt="" className="dropdownAvatar" />
                <span className="dropdownName">Mr Patrick</span>
              </div>
              <hr className="dropdownHr" />
              <div className="profileMenuItem" onClick={() => setActivePage('profile')}>👤 View Profile</div>
              <div className="profileMenuItem" onClick={() => setActivePage('saved')}>🔖 Saved</div>
              <div className="profileMenuItem">⚙️ Settings</div>
              <hr className="dropdownHr" />
              <div className="profileMenuItem">🚪 Log Out</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

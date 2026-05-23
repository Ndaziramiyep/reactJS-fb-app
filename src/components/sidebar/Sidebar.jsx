import React, { useState } from 'react';
import { Bookmark, HelpOutline, WorkOutline, Event, School, RssFeed, PlayCircleFilledOutlined, Group, Chat, ExpandMore, ExpandLess, Store, Flag } from "@mui/icons-material";
import { useApp } from '../../context/AppContext';
import "./sidebar.css";

const menuItems = [
  { icon: <RssFeed />, label: "News Feed",    color: "#1877f2", page: "feed" },
  { icon: <Chat />,    label: "Messenger",    color: "#1877f2", page: "feed" },
  { icon: <PlayCircleFilledOutlined />, label: "Watch", color: "#e41e3f", page: "watch" },
  { icon: <Store />,   label: "Marketplace",  color: "#00a400", page: "marketplace" },
  { icon: <Group />,   label: "Groups",       color: "#1877f2", page: "groups" },
  { icon: <Flag />,    label: "Pages",        color: "#1877f2", page: "feed" },
  { icon: <Event />,   label: "Events",       color: "#e41e3f", page: "events" },
  { icon: <Bookmark />,label: "Saved",        color: "#8b44ac", page: "saved" },
  { icon: <WorkOutline />, label: "Jobs",     color: "#1877f2", page: "feed" },
  { icon: <School />,  label: "Courses",      color: "#1877f2", page: "feed" },
  { icon: <HelpOutline />, label: "Help Center", color: "#65676b", page: "feed" },
];

const friends = [
  { id: 1, name: "Sarah Johnson", img: "/assets/person/2.jpg", online: true },
  { id: 2, name: "Mike Williams", img: "/assets/person/3.jpg", online: true },
  { id: 3, name: "Emily Davis",   img: "/assets/person/4.jpg", online: false },
  { id: 4, name: "James Brown",   img: "/assets/person/5.jpg", online: true },
  { id: 5, name: "Anna Smith",    img: "/assets/person/6.jpg", online: false },
  { id: 6, name: "Chris Lee",     img: "/assets/person/7.jpg", online: true },
];

export default function Sidebar() {
  const { activePage, setActivePage, setOpenChat } = useApp();
  const [showMore, setShowMore] = useState(false);
  const visibleItems = showMore ? menuItems : menuItems.slice(0, 5);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <div className="sidebarProfile" onClick={() => setActivePage('profile')}>
          <img src="/assets/person/1.jpg" alt="" className="sidebarProfileImg" />
          <span className="sidebarProfileName">Mr Patrick</span>
        </div>

        <ul className="sidebarList">
          {visibleItems.map((item, i) => (
            <li
              className={`sidebarListItem ${activePage === item.page ? 'active' : ''}`}
              key={i}
              onClick={() => setActivePage(item.page)}
            >
              <span className="sidebarIconWrapper" style={{ color: item.color }}>{item.icon}</span>
              <span className="sidebarListItemText">{item.label}</span>
            </li>
          ))}
        </ul>

        <button className="sidebarButton" onClick={() => setShowMore(!showMore)}>
          {showMore ? <><ExpandLess fontSize="small" /> See Less</> : <><ExpandMore fontSize="small" /> See More</>}
        </button>

        <hr className="sidebarHr" />

        <p className="sidebarSectionTitle">Your Shortcuts</p>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend" onClick={() => setActivePage('saved')}>
            <img className="sidebarFriendImg" src="/assets/post/gift.png" alt="" />
            <span className="sidebarFriendName">Birthday Reminders</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/post/ad.png" alt="" />
            <span className="sidebarFriendName">Ads Manager</span>
          </li>
        </ul>

        <hr className="sidebarHr" />

        <p className="sidebarSectionTitle">Friends</p>
        <ul className="sidebarFriendList">
          {friends.map(f => (
            <li className="sidebarFriend" key={f.id} onClick={() => setOpenChat({ id: f.id, name: f.name, img: f.img })}>
              <div className="sidebarFriendImgWrapper">
                <img className="sidebarFriendImg" src={f.img} alt={f.name} />
                {f.online && <span className="sidebarOnlineDot" />}
              </div>
              <span className="sidebarFriendName">{f.name}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

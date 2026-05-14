import React, { useState } from 'react';
import './GroupsPage.css';

const allGroups = [
  { id: 1, name: "React Developers", members: "12.4K", img: "/assets/person/2.jpg", joined: false },
  { id: 2, name: "Photography Lovers", members: "8.1K", img: "/assets/person/3.jpg", joined: true },
  { id: 3, name: "Fitness & Health", members: "22K", img: "/assets/person/4.jpg", joined: false },
  { id: 4, name: "Travel Enthusiasts", members: "5.6K", img: "/assets/person/5.jpg", joined: true },
  { id: 5, name: "Foodies United", members: "9.3K", img: "/assets/person/6.jpg", joined: false },
  { id: 6, name: "Tech News Daily", members: "31K", img: "/assets/person/7.jpg", joined: false },
];

export default function GroupsPage() {
  const [groups, setGroups] = useState(allGroups);

  const toggle = (id) => setGroups(prev =>
    prev.map(g => g.id === id ? { ...g, joined: !g.joined } : g)
  );

  return (
    <div className="groupsPage">
      <h2 className="groupsTitle">Groups</h2>
      <div className="groupsGrid">
        {groups.map(g => (
          <div className="groupCard" key={g.id}>
            <img src={g.img} alt={g.name} className="groupImg" />
            <div className="groupInfo">
              <span className="groupName">{g.name}</span>
              <span className="groupMembers">👥 {g.members} members</span>
            </div>
            <button
              className={`groupBtn ${g.joined ? 'groupBtnLeave' : 'groupBtnJoin'}`}
              onClick={() => toggle(g.id)}
            >
              {g.joined ? 'Leave' : 'Join'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

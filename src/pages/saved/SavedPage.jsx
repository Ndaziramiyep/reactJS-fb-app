import React, { useState } from 'react';
import './SavedPage.css';

const initialSaved = [
  { id: 1, title: "React JS Full Tutorial 2024", type: "Video", img: "/assets/person/20.png" },
  { id: 2, title: "Amazing Nature Documentary", type: "Video", img: "/assets/person/20.png" },
  { id: 3, title: "Top 10 Tech Gadgets", type: "Article", img: "/assets/person/20.png" },
  { id: 4, title: "Morning Workout Routine", type: "Post", img: "/assets/person/20.png" },
];

export default function SavedPage() {
  const [saved, setSaved] = useState(initialSaved);

  const unsave = (id) => setSaved(prev => prev.filter(s => s.id !== id));

  return (
    <div className="savedPage">
      <h2 className="savedTitle">Saved</h2>
      {saved.length === 0 && <p className="savedEmpty">Nothing saved yet.</p>}
      <div className="savedList">
        {saved.map(item => (
          <div className="savedCard" key={item.id}>
            <img src={item.img} alt={item.title} className="savedImg" />
            <div className="savedInfo">
              <span className="savedItemTitle">{item.title}</span>
              <span className="savedType">{item.type}</span>
            </div>
            <button className="savedUnsaveBtn" onClick={() => unsave(item.id)}>Unsave</button>
          </div>
        ))}
      </div>
    </div>
  );
}

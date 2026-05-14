import React, { useState } from 'react';
import './WatchPage.css';

const videos = [
  { id: 1, title: "Amazing Nature Documentary", channel: "NatureTV", views: "1.2M views", thumb: "/assets/person/20.png", duration: "12:34" },
  { id: 2, title: "React JS Full Tutorial 2024", channel: "CodeWithMe", views: "340K views", thumb: "/assets/person/20.png", duration: "45:10" },
  { id: 3, title: "Cooking Masterclass", channel: "ChefLife", views: "89K views", thumb: "/assets/person/20.png", duration: "22:05" },
  { id: 4, title: "Travel Vlog: Paris 🗼", channel: "TravelWorld", views: "560K views", thumb: "/assets/person/20.png", duration: "18:22" },
  { id: 5, title: "Morning Workout Routine 💪", channel: "FitLife", views: "210K views", thumb: "/assets/person/20.png", duration: "15:00" },
  { id: 6, title: "Top 10 Tech Gadgets 2024", channel: "TechReview", views: "780K views", thumb: "/assets/person/20.png", duration: "10:45" },
];

export default function WatchPage() {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="watchPage">
      <h2 className="watchTitle">Watch</h2>
      {playing && (
        <div className="watchPlayer">
          <div className="watchPlayerScreen">
            <span>▶ Playing: {playing.title}</span>
          </div>
          <button className="watchCloseBtn" onClick={() => setPlaying(null)}>✕ Close</button>
        </div>
      )}
      <div className="watchGrid">
        {videos.map(v => (
          <div className="watchCard" key={v.id} onClick={() => setPlaying(v)}>
            <div className="watchThumbWrapper">
              <img src={v.thumb} alt={v.title} className="watchThumb" />
              <span className="watchDuration">{v.duration}</span>
            </div>
            <div className="watchInfo">
              <p className="watchVideoTitle">{v.title}</p>
              <span className="watchChannel">{v.channel}</span>
              <span className="watchViews">{v.views}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

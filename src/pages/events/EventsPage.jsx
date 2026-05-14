import React, { useState } from 'react';
import './EventsPage.css';

const allEvents = [
  { id: 1, title: "React Conf 2024", date: "Dec 15, 2024", location: "San Francisco, CA", img: "/assets/person/20.png", attendees: 1240 },
  { id: 2, title: "New Year's Party 🎉", date: "Dec 31, 2024", location: "New York, NY", img: "/assets/person/20.png", attendees: 320 },
  { id: 3, title: "Tech Startup Meetup", date: "Jan 5, 2025", location: "Austin, TX", img: "/assets/person/20.png", attendees: 85 },
  { id: 4, title: "Photography Workshop", date: "Jan 12, 2025", location: "Chicago, IL", img: "/assets/person/20.png", attendees: 40 },
  { id: 5, title: "Fitness Bootcamp", date: "Jan 20, 2025", location: "Miami, FL", img: "/assets/person/20.png", attendees: 150 },
];

export default function EventsPage() {
  const [rsvp, setRsvp] = useState([]);

  const toggleRsvp = (id) => {
    setRsvp(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
  };

  return (
    <div className="eventsPage">
      <h2 className="eventsTitle">Events</h2>
      <div className="eventsGrid">
        {allEvents.map(e => (
          <div className="eventCard" key={e.id}>
            <img src={e.img} alt={e.title} className="eventImg" />
            <div className="eventInfo">
              <span className="eventTitle">{e.title}</span>
              <span className="eventDate">📅 {e.date}</span>
              <span className="eventLocation">📍 {e.location}</span>
              <span className="eventAttendees">👥 {rsvp.includes(e.id) ? e.attendees + 1 : e.attendees} going</span>
            </div>
            <button
              className={`eventBtn ${rsvp.includes(e.id) ? 'eventBtnGoing' : ''}`}
              onClick={() => toggleRsvp(e.id)}
            >
              {rsvp.includes(e.id) ? '✓ Going' : 'Interested'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './MarketplacePage.css';

const listings = [
  { id: 1, title: "iPhone 14 Pro", price: "$850", location: "New York", img: "/assets/person/20.png", seller: "Sarah J." },
  { id: 2, title: "Gaming Chair", price: "$120", location: "Los Angeles", img: "/assets/person/20.png", seller: "Mike W." },
  { id: 3, title: "Mountain Bike", price: "$300", location: "Chicago", img: "/assets/person/20.png", seller: "Emily D." },
  { id: 4, title: "MacBook Air M2", price: "$1,100", location: "Houston", img: "/assets/person/20.png", seller: "James B." },
  { id: 5, title: "Vintage Camera", price: "$75", location: "Phoenix", img: "/assets/person/20.png", seller: "Anna S." },
  { id: 6, title: "Sofa Set", price: "$450", location: "Seattle", img: "/assets/person/20.png", seller: "Chris L." },
];

export default function MarketplacePage() {
  const [contacted, setContacted] = useState([]);

  const handleContact = (id) => {
    if (!contacted.includes(id)) setContacted(prev => [...prev, id]);
  };

  return (
    <div className="marketplacePage">
      <h2 className="marketplaceTitle">Marketplace</h2>
      <div className="marketplaceGrid">
        {listings.map(item => (
          <div className="marketCard" key={item.id}>
            <img src={item.img} alt={item.title} className="marketImg" />
            <div className="marketInfo">
              <span className="marketPrice">{item.price}</span>
              <span className="marketItemTitle">{item.title}</span>
              <span className="marketLocation">📍 {item.location}</span>
              <span className="marketSeller">Seller: {item.seller}</span>
            </div>
            <button
              className={`marketBtn ${contacted.includes(item.id) ? 'marketBtnSent' : ''}`}
              onClick={() => handleContact(item.id)}
            >
              {contacted.includes(item.id) ? '✓ Message Sent' : 'Contact Seller'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

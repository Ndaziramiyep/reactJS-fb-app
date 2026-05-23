import React, { useState } from 'react';
import { Close, Send } from '@mui/icons-material';
import { useApp } from '../../context/AppContext';
import './ChatWindow.css';

export default function ChatWindow() {
  const { openChat, setOpenChat } = useApp();
  const [messages, setMessages] = useState([
    { id: 1, from: 'them', text: 'Hey! How are you?' },
    { id: 2, from: 'me',   text: 'I am good, thanks! 😊' },
  ]);
  const [input, setInput] = useState('');

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), from: 'me', text: input }]);
    setInput('');
  };

  return (
    <div className="chatWindow">
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <img src={openChat.img} alt="" className="chatAvatar" />
          <span className="chatName">{openChat.name}</span>
        </div>
        <Close className="chatClose" onClick={() => setOpenChat(null)} />
      </div>

      <div className="chatMessages">
        {messages.map(m => (
          <div key={m.id} className={`chatMsg ${m.from === 'me' ? 'chatMsgMe' : 'chatMsgThem'}`}>
            {m.text}
          </div>
        ))}
      </div>

      <form className="chatInputRow" onSubmit={send}>
        <input
          className="chatInput"
          placeholder="Aa"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" className="chatSendBtn"><Send fontSize="small" /></button>
      </form>
    </div>
  );
}

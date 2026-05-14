import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [activePage, setActivePage] = useState('feed');
  const [openChat, setOpenChat] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFriendRequests, setShowFriendRequests] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [friends, setFriends] = useState([1, 2]);

  const addFriend = (id) => setFriends(prev => [...prev, id]);
  const removeFriend = (id) => setFriends(prev => prev.filter(f => f !== id));

  return (
    <AppContext.Provider value={{
      activePage, setActivePage,
      openChat, setOpenChat,
      showNotifications, setShowNotifications,
      showFriendRequests, setShowFriendRequests,
      showProfileMenu, setShowProfileMenu,
      friends, addFriend, removeFriend,
    }}>
      {children}
    </AppContext.Provider>
  );
}

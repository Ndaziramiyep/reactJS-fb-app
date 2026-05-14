import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from '../../components/rightbar/Rightbar';
import Feedbar from '../../components/feed/Feed';
import ChatWindow from '../../components/chat/ChatWindow';
import { AppProvider, useApp } from '../../context/AppContext';
import ProfilePage from '../profile/ProfilePage';
import WatchPage from '../watch/WatchPage';
import GroupsPage from '../groups/GroupsPage';
import MarketplacePage from '../marketplace/MarketplacePage';
import SavedPage from '../saved/SavedPage';
import EventsPage from '../events/EventsPage';
import "./home.css";

function PageContent() {
  const { activePage } = useApp();
  switch (activePage) {
    case 'profile':    return <ProfilePage />;
    case 'watch':      return <WatchPage />;
    case 'groups':     return <GroupsPage />;
    case 'marketplace':return <MarketplacePage />;
    case 'saved':      return <SavedPage />;
    case 'events':     return <EventsPage />;
    default:           return <><Feedbar /><Rightbar /></>;
  }
}

function Layout() {
  const { openChat } = useApp();
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <PageContent />
      </div>
      {openChat && <ChatWindow />}
    </>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

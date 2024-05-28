import React from 'react'
// import { useState } from 'react'
import {Bookmark,HelpOutline,WorkOutline,Event,School, RssFeed, PlayCircleFilledOutlined, Group, Chat} from "@material-ui/icons";
import "./sidebar.css"
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon" />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon" />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon" />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon" />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                    <span className="sidebarFriendName">Mr Patrick</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                    <span className="sidebarFriendName">Mr Patrick</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                    <span className="sidebarFriendName">Mr Patrick</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                    <span className="sidebarFriendName">Mr Patrick</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                    <span className="sidebarFriendName">Mr Patrick</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                    <span className="sidebarFriendName">Mr Patrick</span>
                </li>
            </ul>
            </div>
        </div>
    )
}














// export default function Sidebar(){
//     const [count,setCount] = useState(0);
//     const counter=()=>{
//         setCount(count+1);
//     }
//     return(
//         <div>
//             <Btn count={count} onClick={counter}/>
//             <Btn count={count} onClick={counter}/>
//         </div>
//     )};
//     const Btn=({count,onClick})=>{
//         return(
//         <div>
//             <p>Lets count the number of clicks on this button!</p>
//             <button onClick={onClick}>Clicked {count} times!</button>
//         </div>
//     )};
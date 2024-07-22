import React from 'react'
import {Person,Chat,Notifications,Search} from "@material-ui/icons"
import "./topbar.css"
export default function Topbar(){
    return(
        <div className="topbarContainer">
           <div className="topbarLeft">
            <span className="logo">Mr Patrick</span>
           </div>
           <div className="topbarCenter">
                <div className="searchbar">
                <Search />
                <input placeholder="search for friends post or video" className="searchInput"/>
                 </div>
           </div>
           <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                 <Person />
                    <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">5</span>
                </div>
            </div>
            <img src="/assets/person/1.jpg" alt=" " className="topbarImage"/>
           </div>
        </div>
    )
};
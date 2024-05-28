import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from '../../components/rightbar/Rightbar';
import Feedbar from '../../components/feed/Feed';
import "./home.css";
// import {person} from "@mui/icons-material"

export default function Home(){
    return(
    <>
        <Topbar/>
        <div className='homeContainer'>
        <Sidebar/>
        <Feedbar/>
        <Rightbar/>
        </div>
    </>
    );
}
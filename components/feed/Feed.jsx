import React from 'react'
import "./feed.css"
import Post from '../post/Post'
import Share from '../share/Share'
export default function Feedbar(){
    return(
        <div className="feed">
        <div className="feedWrapper">
        <Share/>           
        <Post/>           
        </div>
        </div>
    )
}
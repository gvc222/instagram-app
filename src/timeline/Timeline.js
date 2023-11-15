import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'
import { useState } from 'react';
function Timeline() {
    const [posts] = useState([
        {
            user: "boinkie",
            postImage: "https://th.bing.com/th/id/R.ff25770a33193cb2184449425f1fee6a?rik=7C%2fRBavNaLmUhg&pid=ImgRaw&r=0",
            likes: 241,
            timestamp: "2d"
        },
        {
            user: "zhicheng",
            postImage: "https://th.bing.com/th/id/R.55413ee656b6c186e61ec878dfb34caf?rik=yI%2bsk1bgeSSaNA&riu=http%3a%2f%2ffightersgeneration.com%2fnx7%2fgame%2fjjba-stage-naples-train-station.jpg&ehk=pCKjVMp%2fv%2f9R46Cpi49zP9crd7Abm8gultBN06dh53Y%3d&risl=&pid=ImgRaw&r=0",
            likes: 167,
            timestamp: "2d"
        },
        {
            user: "jinna",
            postImage: "https://64.media.tumblr.com/663cd33a026cbdb22b2a115beb690db6/tumblr_pkbq6bB6XO1xlyyvto1_1280.jpg",
            likes: 566,
            timestamp: "2d"
        },
        {
            user: "boinkie",
            postImage: "https://media.distractify.com/brand-img/sCKQ4We9v/1200x628/jojo-green-dolphin-street-prison-1638909482061.png",
            likes: 350,
            timestamp: "5w"
        },
        {
            user: "giannz",
            postImage: "https://i.pinimg.com/originals/40/75/ed/4075ede5d28e36180f75bd49266484ef.jpg",
            likes: 350,
            timestamp: "5w"
        },
    ]);
  return (
    <div className="timeline">
        
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post) => (
                    <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
                ))}
            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
        
    </div>
    
  )
}

export default Timeline
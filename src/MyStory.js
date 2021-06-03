import React from "react";
import './css/MyStory.css';
import profilePic from './images/profilePic.jpeg';

function MyStory() {
    return (
    <div className="root">
        <span className="header">My Story</span>
        <div className="profile">
            <img className = "profile photo" src={profilePic} alt="Avatar" />
            <br />
            <span className="profile aboutme"> 
            Software Developer with 5 years of total experience. Currently working in Adobe.
            I have worked on various tools and technologies to deliver
            highly scalable solutions for various clients. Agile
            methodologies and extreme programming practitioner.
            Experienced in CI/CD tools to automate deployments.
        </span>
        </div>
    </div>
    );
}

export default MyStory;
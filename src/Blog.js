import React from "react";
import profilePic from './images/profilePic.jpeg';
import './css/Blog.css'


function Blog() {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={profilePic} alt="Avatar" className="image"/>
                </div>
                <div className="flip-card-back">
                    <h1>John Doe</h1> 
                    <p>Architect Engineer</p> 
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
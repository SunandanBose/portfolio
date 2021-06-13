import React from "react";
import './css/Blog.css'


function Blog(props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={ props.image !== "" ? props.image : "images/blog/blog.jpeg" } alt="Avatar" className="image"/>
                </div>
                <div className="flip-card-back">
                    <h1>{props.title}</h1> 
                    <p>{props.body}</p> 
                </div>
            </div>
        </div>
    );
}

export default Blog;
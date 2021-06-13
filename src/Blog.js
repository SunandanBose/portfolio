import React from "react";
import './css/Blog.css'
import Truncate from "react-truncate";


function Blog(props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={ props.image !== "" ? props.image : "images/blog/blog.jpeg" } alt="Avatar" className="image"/>
                </div>
                <div className="flip-card-back">
                    <div className="blogTitle"><h1>{props.title}</h1></div>
                    <Truncate className="blogDescription"
                        lines={7}
                        ellipsis={
                        <span>
                            ...{" "}
                        </span>
                        }
                    >
                        {props.body}
                    </Truncate>
                    {/* <span className="blogDescription truncate">{props.body}</span>  */}
                    <div className="showCode"><a href={props.github}>Code Link...</a></div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
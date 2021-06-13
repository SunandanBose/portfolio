import React from "react";
import Blog from "./Blog";
import { data } from './db/data.js'
import './css/Blogs.css'


function Blogs() {
    return (
        <div className="blogs">
            <div className="blogsHeader"><span>Projects</span></div>
            { data.blogs.map((blog) => <Blog id={blog.id} title={blog.title} body={blog.body} image={blog.imageUrl}/> )}
        </div>
    );
}

export default Blogs;
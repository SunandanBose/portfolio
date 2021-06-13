import React from "react";
import './css/MyStory.css';
import profilePic from './images/profilePic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faJava } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import elastic from './images/elastic.png'
import spring from './images/spring.svg'
import mysql from './images/mysql.png'
import kafka from './images/kafka.png'
import kubernetes from './images/kubernetes.svg'
import googleCloud from './images/googleCloud.png'
import docker from './images/docker.png'
// import { faDocker } from '@fortawesome/free-brands-svg-icons'

function size(){
    var x = window.matchMedia("(max-width: 500px)")
    if(x.matches)
        return "3x"
    return "6x"
}

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
        <div className="tech">
            <div className="topic">
                <span className="topicTitle">Languages</span>
                <span className="topicDescription">My favorite languages for systems programming, web automation, and data analysis.</span>
                <div className="logos">
                    <div className="logo">
                        <FontAwesomeIcon  className="logoImage" icon={faJava} size={size()} color="red"/>
                    </div>
                    <div className="logo logoImage">
                        <FontAwesomeIcon  className="logoImage" icon={faPython} size={size()} color="purple"/>
                    </div>
                    <div className="logo logoImage">
                        <FontAwesomeIcon  className="logoImage" icon={faJsSquare} size={size()} color="goldenrod"/>
                    </div>  
                </div>
            </div>
            <div className="topic">
                <span className="topicTitle">Backend</span>
                <span className="topicDescription">My preferred technologies for back-end web programming and database architecture.</span>
                <div className="logos">
                    <div className="logo">
                        <img className="logoImage" src={ elastic } alt="elastic" />
                    </div>
                    <div className="logo">
                        <img className="logoImage" src={ spring } alt="spring" />
                    </div>
                    <div className="logo">
                        <img className="logoImage" src={ mysql } alt="spring" />
                    </div>
                    <div className="logo">
                        <img className="logoImage" src={ kafka } alt="spring" />
                    </div>
                </div>
            </div>
            <div className="topic">
                <span className="topicTitle">Frontend</span>
                <span className="topicDescription">My preferred technologies for front-end web development and component design.</span>
                <div className="logos">
                    <div className="logo logoImage">
                        <FontAwesomeIcon  className="logoImage" icon={faReact} size={size()} color="DarkBlue"/>
                    </div>
                    <div className="logo logoImage">
                        <FontAwesomeIcon  className="logoImage" icon={faHtml5} size={size()} color="fireBrick"/>
                    </div>
                    <div className="logo logoImage">
                        <FontAwesomeIcon  className="logoImage" icon={faCss3Alt} size={size()} color="tamato"/>
                    </div>  
                    
                </div>
            </div>
            <div className="topic">
                <span className="topicTitle">Tools</span>
                <span className="topicDescription">My favorite tools for version control, code editing, and container orchestration.</span>
                <div className="logos">
                    <div className="logo">
                        <img className="logoImage" src={ docker } alt="Docker" />
                    </div>
                    <div className="logo logoImage">
                        <FontAwesomeIcon  className="logoImage" icon={faGithub} size={size()}/>
                    </div>
                    <div className="logo">
                        <img className="logoImage" src={ kubernetes } alt="kubernetes" />
                    </div>  
                    <div className="logo">
                        <img className="logoImage" src={ googleCloud } alt="Google Cloud" />
                    </div>  
                </div>
            </div>
        </div>
    </div>
    );
}

export default MyStory;
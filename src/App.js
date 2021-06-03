import React from "react";
import './index.css';
import Particles from "./Particles.js";
import Email from './images/Email.png';
import Facebook from './images/Facebook.png';
import Github from './images/GitHub.png';
import LinkedIn from './images/LinkedIn.png';
import Resume from './images/Resume.png';
import CV from'./files/Resume.pdf';
import MyStory from './MyStory'

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100vh",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  }
};

function App() {
  return (
    <div className={styles.root}>
      <Particles>
        
      </Particles>
      <div className="title" >
          <span className="name">Sunandan Bose</span>
          <span className="description">Programmer - Web Developer - Engineer</span>
          <div className="icontray">
            <div>
              <a aria-label= "LinkedInIcon" href="https://www.linkedin.com/in/sunandan-bose/" ><img className="icon" alt="linkedIn" src={LinkedIn}/></a>
            </div>
            <div>
              <a aria-label= "FacebookIcon" href="https://www.facebook.com/sunandan.bose.3" ><img className="icon" alt="Facebook" src={Facebook}/></a>
            </div>
            <div>
              <a aria-label= "GithubIcon" href="https://github.com/SunandanBose" ><img className="icon" alt="Github" src={Github}/></a>
            </div>
            <div>
              <a aria-label= "EmailIcon" href="mailto:sunandanbose17@gmail.com" ><img className="icon" alt="Email" src={Email}/></a>
            </div>
            <div>
              <a aria-label= "ResumeIcon" href={CV} download="Resume"><img className="icon" alt="Resume" src={Resume}/></a>
            </div>
          </div>
      </div>
      <MyStory />
    </div>
  );
}

export default App;
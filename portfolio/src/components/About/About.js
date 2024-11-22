import React from "react";
import './About.css'
import profile_img from '../../assets/about_profile.jpeg'

function About(){
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a full-stack developer from Kenya with 5 years of experience in building web applications using React, JavaScript, Python, and Django. I specialize in creating dynamic, user-friendly solutions and have worked on projects ranging from small business sites to large-scale systems. Passionate about clean code and continuous learning, I stay up-to-date with the latest technologies to deliver seamless user experiences.</p>
                        <p>My passion is turning ideas into functional projects, bringing concepts to life through clean, innovative, and user-focused web solutions. I thrive on solving real-world problems through creativity and technology.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
};
export default About;

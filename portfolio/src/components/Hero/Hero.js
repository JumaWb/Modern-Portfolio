import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Hero(){
    return(
        <div id="home" className="hero">
            <img src={profile_img} alt=""    />
            <h1> <span>I'm Brian Juma,</span> fullstack developer based in Kenya with 5 years of experience</h1>
            <p>I am a full-stack developer from Kenya with 5 years of experience in building web applications using React, JavaScript, Python, and Django. I specialize in creating dynamic, user-friendly solutions and have worked on projects ranging from small business sites to large-scale systems. Passionate about clean code and continuous learning, I stay up-to-date with the latest technologies to deliver seamless user experiences.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>


        </div>
    )
};
export default Hero;
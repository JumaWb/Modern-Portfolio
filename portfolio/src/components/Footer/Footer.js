import React from "react";
import './Footer.css'
import footer_logo from '../../assets/footer.jpeg'
import user_icon from '../../assets/user.jpeg'

function Footer(){
    return(
        <div className="Footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                   <p>I am a full-stack developer from Kenya with 5 years of experience turning ideas into functional projects.</p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2024. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
};
export default Footer;
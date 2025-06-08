import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img className='logo-bottom' src={assets.logo_bottom} alt="" />
                <p>FoodPrep is a full-stack project built by Mridul Rajgaria as part of his journey in modern stack learning. This solo project is aimed at gaining hands-on experience in full-stack development, helping deepen practical understanding through real-world implementation. It serves as a learning initiative to strengthen core skills and build confidence in modern web technologies.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9153090104</li>
                    <li>iammridul222@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='copyright'>Copyright 2025 @  FoodPrep. All rights reserved</p>
    </div>
  )
}

export default Footer
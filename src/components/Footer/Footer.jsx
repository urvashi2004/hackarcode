import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";



const Footer = () => {
  return (
    <div className='footer '>
      <div className='footer-text'></div>
        <div className='footer-social-media-icons'>
           <div className="icons"><FaXTwitter /></div> 
           <div className="icons"><AiOutlineDiscord /></div> 
           <div className="icons"><FaInstagram/></div> 
           <div className="icons"><FiLinkedin /></div> 
        </div>
    </div>
  )
}

export default Footer
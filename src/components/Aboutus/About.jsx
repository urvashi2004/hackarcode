import React from 'react'
import './About.css'
import con1 from '../../assets/con1.png'
import con2 from '../../assets/con2.png'
import con3 from '../../assets/con3.png'
import con4 from '../../assets/con4.png'
const About = () => {
  return (
    <div className='about newcon'>
      <div className="about-left-content">
        <h1>What sets us apart</h1>
        <p>We are a group of community leaders who have cultivated a network of aspiring developers within our community. With a shared passion for innovation and technology, we have come together to organize this hackathon. Our goal is to create a platform that fosters collaboration, creativity, and skill development among participants. </p>
        <p>By hosting this event, we aim to provide opportunities for aspiring developers to showcase their talents, connect with industry professionals, and gain valuable experience in a supportive and inclusive environment. Through workshops, mentorship programs, and networking sessions, we are committed to empowering the next generation of innovators and problem solvers. Join us in shaping the future of technology and making a positive impact on our community</p>
      </div> 
      <div className="about-right-content">
        <div className="img-container con1">
          <img src={con1} alt="" className='img1' id='image'/>
          <img src={con2} alt="" className='img2' id='image'/>
          <img src={con3} alt="" className='img3' id='image'/>
          <img src={con4} alt="" className='img4' id='image'/>
          <img src={con1} alt="" className='img1' id='image'/>
          <img src={con2} alt="" className='img2' id='image'/>
          <img src={con3} alt="" className='img3' id='image'/>
          <img src={con4} alt="" className='img4' id='image'/>
          <img src={con1} alt="" className='img1' id='image'/>
          <img src={con2} alt="" className='img2' id='image'/>
          <img src={con3} alt="" className='img3' id='image'/>
          <img src={con4} alt="" className='img4' id='image'/>
        </div>
        <div className="img-container con2">
          <img src={con1} alt="" className='img1' id='image'/>
          <img src={con2} alt="" className='img2' id='image'/>
          <img src={con3} alt="" className='img3' id='image'/>
          <img src={con4} alt="" className='img4' id='image'/>
          <img src={con1} alt="" className='img1' id='image'/>
          <img src={con2} alt="" className='img2' id='image'/>
          <img src={con3} alt="" className='img3' id='image'/>
          <img src={con4} alt="" className='img4' id='image'/>
          <img src={con1} alt="" className='img1' id='image'/>
          <img src={con2} alt="" className='img2' id='image'/>
          <img src={con3} alt="" className='img3' id='image'/>
          <img src={con4} alt="" className='img4' id='image'/>
        </div>
      </div> 
    </div>
  )
}

export default About
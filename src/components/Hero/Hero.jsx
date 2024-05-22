import React from 'react'
import './Hero.css'
// import video from '../../assets/video1.mp4'
import logo from '../../assets/logo2.png'
import { TbLocation } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero newcon'>
      {/* <video src={video} muted autoPlay loop type='video/mp4'></video> */}

      <div className="heroContent container">
        <div className="first-content">
            <h1>Innovate For Good</h1>
        </div>
        {/* <div className="textDiv">
            <div className='anim'>HACK</div>
            <div className='anim1'>A</div>
            <div className='anim2'>R</div>
            <div className='anim3'>C</div>
            <div className='anim4'>A</div>
            <div className='anim5'>D</div>
            <div className='anim6'>E</div>
        </div> */}
        <div className="third-content">
            <div className="l-third-con">
                <div className="loc">
                <TbLocation />
                </div>
                <div className="loc-info">
                  <p className="date">25-26 AUGUST 2024</p>
                  <p className="address">KIET GHAZIABAD,INDIA</p>
                </div>
            </div>
            <div className="r-third-con">
                <button className="btn">
                  <span>REGISTRATIONS OPEN</span>
                </button>
            </div>
            
        </div>
        <div className='fourth-content'>
              <Link to="/abc"><span>Interested in sponsoring? Reach out to us!</span></Link>
            </div>
        </div>
        <div className="overlay"></div>

    </div>

  )
}

export default Hero
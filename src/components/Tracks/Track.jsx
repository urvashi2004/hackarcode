import React from 'react'
import './Track.css'
import ai from'../../assets/ai.gif'
import vir from'../../assets/block.gif'
import web from'../../assets/web.gif'
import open from'../../assets/open.gif'
import iot from'../../assets/iot.gif'
import cloud from'../../assets/cloud.gif'


const Track = () => {
  return (
    <div className='track newcon'>
        <div className="head">
            <h1 id='tit'>Tracks</h1>
        </div>
        <div className="track-contents">
            <div className="elements" >
            <img src={ai} muted autoPlay loop type='video/gif'></img>
            <div id='txt'>Generative AI & Machine Learning</div>
            </div>
            <div className="elements">
            <img src={web} muted autoPlay loop type='video/gif'></img>
            <div id='txt'> Blockchain & Web3 </div>
            </div>
            <div className="elements">
              <img src={iot} muted autoPlay loop type='video/gif'></img>
              <div id='txt'> IoT & Embedded Systems </div>
              </div>
            <div className="elements">
              <img src={vir} muted autoPlay loop type='video/gif'></img>
              <div id='txt'> Augmented / Virtual Reality </div>
            </div>
            <div className="elements">
            <img src={cloud} muted autoPlay loop type='video/gif'></img>
              <div id='txt'> Cloud & DevOps </div>
              </div>
            <div className="elements">
            <img src={open} muted autoPlay loop type='video/gif'></img>
              <div id='txt'> Open Track : Innovate for Good</div>
            </div>
        </div>
    </div>
  )
}

export default Track
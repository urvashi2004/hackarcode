import React,{useState,useEffect} from 'react'
import './Prize.css'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import girl from '../../assets/girls.png'
import game from '../../assets/game.png'
import star from '../../assets/star.png'
import cir1 from '../../assets/circle1.png'
import cir2 from '../../assets/circle2.png'
import cir3 from '../../assets/circle3.png'

const Prize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='prize newcon'>
      <div className="upper-cont">
        <div className="heading1">
          <h1>HackArcode Prizes</h1>
        </div>
        <div className="upper-cont-position">
          <div className="first-pos">
              <img src={cir1} alt="" />
              <div className="text-prize">
                <div className="text-prize-pr2">
                  <div className="icon"><FaIndianRupeeSign/></div>
                  <span className='pr'>25k</span>
                </div> 
                <p className='paara2'>Winner</p>
              </div>
          </div>
          <div className={`second-pos ${(screenWidth<=1200)?"":"remove"}`}>
              <img src={cir2} alt="" />
              <div className="text-prize">
                <div className="text-prize-pr1">
                  <div className="icon"><FaIndianRupeeSign/></div>
                  <span className='pr'>15k</span>
                </div> 
                <p className='paara'>First Runner-Up</p>
              </div>
          </div>
          <div className="third-pos">
              <img src={cir3} alt="" />
              <div className="text-prize">
                <div className="text-prize-pr3">
                  <div className="icon"><FaIndianRupeeSign/></div>
                  <span className='pr'>10k</span>
                </div> 
                <p className='paara3'>Second Runner-Up</p>
              </div>
          </div>
        </div>
        <div className="upper-cont-thirdcon">
          <div className="first-box">
            <div className="first-box-upp-con">
              <img src={girl} alt="" />
              <h2>Best All Girls Team</h2>
            </div>
            <div className="first-box-down-con">
            <div className="icon"><FaIndianRupeeSign/></div>
            <p>5,000 to the winning team and additional perks</p>  
            </div>
          </div>
          <div className="first-box">
          <div className="first-box-upp-con">
              <img src={star} alt="" />
              <h2>Best Beginner Team</h2>
            </div>
            <div className="first-box-down-con">
            <div className="icon"><FaIndianRupeeSign/></div>
            <p>5,000 to the winning team and additional perks</p>  
            </div>
          </div>
          <div className="first-box">
            <div className="first-box-upp-con">
              <img src={game} alt="" />
              <h2>Best Game Development Team</h2>
            </div>
            <div className="first-box-down-con">
            <div className="icon"><FaIndianRupeeSign/></div>
            <p>5,000 to the winning team and additional perks</p>  
            </div>
          </div>
        </div>
      </div>
      <div className="lower-cont">

      </div>

    </div>
  )
}

export default Prize
import React,{useState} from 'react'
import './Partner.css'
const Partner = () => {

  const [menu,setMenu]=useState("sponsor");

  return (
    <div className='partner newcon'>
      <div className="head">
          <h1 id='title'>Partners</h1>
      </div>
      <div className="mid">
          <div id='btn1'onClick={()=>setMenu('sponsor')} className={menu==="sponsor"?"active":""}>Sponsors</div>
          <div id='btn1'onClick={()=>setMenu('featured')} className={menu==="featured"?"active":""}>Featured Partners</div>
          <div id='btn1'onClick={()=>setMenu('in')} className={menu==="in"?"active":""}>In-kind Partners</div>
      </div>
      <div className="last">

      </div>
    </div>
  )
}

export default Partner
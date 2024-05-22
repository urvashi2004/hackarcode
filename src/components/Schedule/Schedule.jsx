import React,{useState} from 'react'
import './Schedule.css'
const Schedule = () => {

    const [menu,setMenu]=useState("sponsor");


  return (
    <div className='schedule newcon'> 
        <div className="head4">
          <h1 id='tit1'>Schedule</h1>
      </div>
      <div className="mid4">
          <div id='btn2'onClick={()=>setMenu('28')} className={menu==="28"?"active1":""}>28th AUGUST 2024</div>
          <div id='btn2'onClick={()=>setMenu('29')} className={menu==="29"?"active1":""}>29th AUGUST 2024</div>
          <div id='btn2'onClick={()=>setMenu('30')} className={menu==="30"?"active1":""}>30th AUGUST 2024</div>
      </div>
      <div className="last4">

      </div>
    </div>
  )
}

export default Schedule

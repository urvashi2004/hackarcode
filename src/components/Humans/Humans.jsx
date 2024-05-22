import React,{useState} from 'react'
import './Humans.css'
const Humans = () => {

    const [menu,setMenu]=useState("partner");

  return (
    <div className='human newcon'>
      <div className="head">
          <h1 id='tit2'>Humans</h1>
      </div>
      <div className="mid">
          <div id='btn'onClick={()=>setMenu('partner')} className={menu==="partner"?"active":""}>Partner Reps</div>
          <div id='btn'onClick={()=>setMenu('mentor')} className={menu==="mentor"?"active":""}>Mentors &Judges</div>
          <div id='btn'onClick={()=>setMenu('volunteer')} className={menu==="volunteer"?"active":""}>Volunteers</div>
          <div id='btn'onClick={()=>setMenu('organizers')} className={menu==="organizers"?"active":""}>Organizers</div>
      </div>
      <div className="last">

      </div>
    </div>
  )
}

export default Humans
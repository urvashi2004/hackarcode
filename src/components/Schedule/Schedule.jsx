import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [menu, setMenu] = useState("28");

    return (
        <div className='schedule newcon'>
            <div className="head4">
                <h1 id='tit1'>Schedule</h1>
            </div>
            <div className="mid4">
                <div id='btn2' onClick={() => setMenu('24')} className={menu === "24" ? "active1" : ""}>24th AUGUST 2024</div>
                <div id='btn2' onClick={() => setMenu('25')} className={menu === "25" ? "active1" : ""}>25th AUGUST 2024</div>
            </div>
            <div className="last4">
                {menu === "24" && (
                    <div className="schedule-content">
                        <h2>Schedule for 24th August 2024</h2>
                        <p>Event 01<br/>09:00 AM - Registration Starts</p>
                        <p>Event 02<br/>11:00 AM - Sponsor Session</p>
                        <p>Event 03<br/>11:30 AM - Opening Ceremony</p>
                        <p>Event 04<br/>12:00 PM - Hackathon Start</p>
                        <p>Event 05<br/>03:00 PM - Lunch</p>
                        <p>Event 06<br/>04:00 PM - Session - 1</p>
                        <p>Event 07<br/>06:30 PM - Evening Snacks</p>
                        <p>Event 08<br/>09:00 PM - Dinner</p>
                        <p>Event 09<br/>10:00 PM - Session - 2</p>
                        <p>Event 10<br/>12:00 PM - Mid-night Snacks And Games</p>
                    </div>
                )}
                {menu === "25" && (
                    <div className="schedule-content">
                        <h2>Schedule for 25th August 2024</h2>
                        <p>Event 01<br/>07:00 AM - Breakfast</p>
                        <p>Event 02<br/>11:30 AM - Judging</p>
                        <p>Event 03<br/>01:00 PM - Session - 3</p>
                        <p>Event 04<br/>02:00 PM - Submission</p>
                        <p>Event 05<br/>04:00 PM - Prize Distribution and Closing Ceremony</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Schedule;
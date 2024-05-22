import React, { useState } from 'react';
import './Faq.css';
import { GiBeveledStar } from 'react-icons/gi';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: "Will you support or reimburse our travel expenses?",
            answer: "Since HackArcode2024 is a community-driven hackathon. Unfortunately we will not be able to support you with travel."
        },
        {
            question: "A member/few members of my team cancelled at the last minute. Can I still hack?",
            answer: "Kindly open the #organizer-ticket on our Discord Server and let the organizers know as soon as possible, so that we can try to make necessary next steps."
        },
        {
            question: "What are the arrangements for Hackers?",
            answer: `On both nights (9th Feb & 10th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We have arranged a separate sleeping area for girls, clean washrooms, personal hygiene and sanitary kits, etc. We recommend bringing your own blanket if you need one. We want to make sure that all hackers feel comfortable and safe at the hackathon.
            There will be meals served on the respective days to everyone who checks-in
            High-tea, and Dinner on 9 Feb
            Breakfast, Lunch, High-tea, and Dinner on 10 Feb
            Breakfast and Lunch on 11 Feb`
        },
        {
            question: "Can Hackers start working on project in advance?",
            answer: "No. You can only start working on the projects once hacking begins on 9 Feb after the opening ceremony. Any project with an earlier commit history will be disqualified. However, you can learn the basic tools and technologies you might need before the hackathon."
        },
        {
            question: "At what time should I arrive at the hackathon on 25 Aug and at what time can I depart on 26 Aug?",
            answer: "You are expected to arrive at the hackathon venue by 2 PM IST on Friday, 9 Feb. The estimated departure time from the venue is 7 PM IST on Sunday, 11th Feb. Book your return travel tickets accordingly to ensure you don't miss the Closing Ceremony."
        },
        {
            question: "Is there any resource that can help me to get more info about venue?",
            answer: "To learn more about the venue, arrival & departure, and how to reach there, you can check out our Venue Guide here."
        }
        ,{
            question: "What are the arrangements for Hackers?",
            answer: `On both nights (9th Feb & 10th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We have arranged a separate sleeping area for girls, clean washrooms, personal hygiene and sanitary kits, etc. We recommend bringing your own blanket if you need one. We want to make sure that all hackers feel comfortable and safe at the hackathon.
            There will be meals served on the respective days to everyone who checks-in
            High-tea, and Dinner on 9 Feb
            Breakfast, Lunch, High-tea, and Dinner on 10 Feb
            Breakfast and Lunch on 11 Feb`
        },
        {
            question: "Can Hackers start working on project in advance?",
            answer: "No. You can only start working on the projects once hacking begins on 9 Feb after the opening ceremony. Any project with an earlier commit history will be disqualified. However, you can learn the basic tools and technologies you might need before the hackathon."
        },
        {
            question: "At what time should I arrive at the hackathon on 25 Aug and at what time can I depart on 26 Aug?",
            answer: "You are expected to arrive at the hackathon venue by 2 PM IST on Friday, 9 Feb. The estimated departure time from the venue is 7 PM IST on Sunday, 11th Feb. Book your return travel tickets accordingly to ensure you don't miss the Closing Ceremony."
        },
        {
            question: "Is there any resource that can help me to get more info about venue?",
            answer: "To learn more about the venue, arrival & departure, and how to reach there, you can check out our Venue Guide here."
        }
    ];

    return (
        <div className='faq newcon'>
            <div className="heading">
                <h1>FAQ</h1>
            </div>
            <div className="mid-content">
                {faqData.map((item, index) => (
                    <div key={index} className={`contents `}>
                        <div className="question" onClick={() => toggleFAQ(index)}>
                            <div className="bullets"><GiBeveledStar /></div>
                            <span>{item.question}</span>
                            <div className="icon">
                                <div className="add-icon" style={{ display: `${activeIndex === index ? 'none' : 'block'}` }}><IoMdAdd /></div>
                                <div className="sub-icon" style={{ display: `${activeIndex === index ? 'block' : 'none'}` }}><FaMinus /></div>
                            </div>
                        </div>
                        <div className={`answer ${activeIndex === index ? "show" : "archive"}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/Aboutus/About'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import Partner from './components/Partners/Partner';
import Track from './components/Tracks/Track';
import Humans from './components/Humans/Humans';
import Schedule from './components/Schedule/Schedule';
import Faq from './components/Faqs/Faq';
import Prize from './components/Prize/Prize';

function App() {

  return (
    <>
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path="/part" element={<Partner/>} />
        <Route exact path="/track" element={<Track/>} />
        <Route exact path="/human" element={<Humans/>} />
        <Route exact path="/schedule" element={<Schedule/>} />
        <Route exact path="/prize" element={<Prize/>} />     
        <Route exact path="/aboout" element={<About/>} />
        <Route exact path="/faq" element={<Faq/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
      </>
  )
}

export default App

import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {

    const [menu,setMenu]=useState("home")
    const [active,setActive]=useState('navBar')
    // function to toggle navbar 
    const showNav=()=>{
        setActive('navBar activenavBar');
    }
    const removeNavbar=()=>{
        setActive('navBar');
    }
  return (
    // <nav className='container' > 
    //     <img src={logo} alt="" />
    //     <ul>
    //       <li onClick={()=>setMenu('home')} className={menu==="home"?"active":""}> <Link to='/hom'>Home</Link></li>
    //       <li onClick={()=>setMenu('partners')} className={menu==="partners"?"active":""}>Partners</li>
    //       <li onClick={()=>setMenu('tracks')} className={menu==="tracks"?"active":""} >Tracks</li>
    //       <li onClick={()=>setMenu('humans')} className={menu==="humans"?"active":""} >Humans</li>
    //       <li onClick={()=>setMenu('schedule')} className={menu==="schedule"?"active":""} >Schdeule</li>
    //       <li onClick={()=>setMenu('prize')} className={menu==="prize"?"active":""}>Prize</li>
    //       <li onClick={()=>setMenu('swag')} className={menu==="swag"?"active":""}>Swag</li>
    //       <li onClick={()=>setMenu('about')} className={menu==="about"?"active":""}>'>About Us</Link></li>
    //       <li onClick={()=>setMenu('faq')} className={menu==="faq"?"active":""}>FAQ</li>
    //     </ul>
    // </nav>
    
    <section className='navBarSection'>
        <header className="header ">
            <div className="logoDiv">
                <Link href="/123" className='logo flex'>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <Link to="/" className="navLink" onClick={()=>setMenu('home')} id={menu==="home"?"active":""}>Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/part" className="navLink" onClick={()=>setMenu('partners')} id={menu==="partners"?"active":""} >Partners</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/track" className="navLink" onClick={()=>setMenu('tracks')} id={menu==="tracks"?"active":""} >Tracks</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/human" className="navLink" onClick={()=>setMenu('humans')} id={menu==="humans"?"active":""} >Humans</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/schedule" className="navLink" onClick={()=>setMenu('schedule')} id={menu==="schedule"?"active":""} >Schedule</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/prize" className="navLink" onClick={()=>setMenu('prize')} id={menu==="prize"?"active":""} >Price</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/swag" className="navLink" onClick={()=>setMenu('swag')} id={menu==="swag"?"active":""} >Swag</Link>
                    </li>
                    <li className="navItem" id='ab'>
                        <Link to="/aboout" className="navLink" onClick={()=>setMenu('about')} id={menu==="about"?"active":""} >About Us</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/faq" className="navLink" onClick={()=>setMenu('faq')} id={menu==="faq"?"active":""} >FAQ</Link>
                    </li>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>

                
            </div>

            <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon' />
            </div>

        </header>
    </section>
  )
}

export default Navbar
import React from 'react'
import "./Navbarstyle.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { SiChatbot } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="NavbarItems">
    <nav>
        <ul className='nav-menu'>
            <li>
                <a href='index.html' className='nav-links'>
                    <i class="fa fa-home" aria-hidden="true"></i><p className='text'>Home</p>
                </a>
            </li>
            <li>
                <a href='index.html' className='nav-links'> 
                     <p className='text'><FaRegNewspaper /><br/>Assessment</p> 
                     
                </a>
            </li>
            <li>
                <a href='index.html' className='nav-links'>
                <p className='text'><SiChatbot /><br/>Chatbot</p> 
                </a>
            </li>
            <li>
                <a href='index.html' className='nav-links'>
                <p className='text'><SiGoogleanalytics /><br/>Analysis</p> 
                </a>
            </li>
            <li>
                <a href='index.html' className='nav-links'>
                <i class="fa fa-regular fa-user"></i><p className='text'>Profile</p> 
                </a>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import '../styles/NavBar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="NavBar">
            <div className="NavBar_Left">
                <li>
                    <a href='/'>Dot Main</a>
                </li>
            </div>
            <div className="NavBar_Right">
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/'>Project</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </div>
        </nav>
   </div>
  )
}

export default Navbar;
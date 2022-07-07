import React from 'react'
import '../styles/NavBar.scss'

const Navbar = ({onClick}) => {
  return (
    <div className="NavGeneral">
        <nav className="NavBar">
            <div className="NavBar_Left">
                <li>
                    <a onClick={()=>onClick('home')}>Dot Main</a>
                </li>
            </div>
            <div className="NavBar_Right">
                <li>
                    <a onClick={()=>onClick('about')}>About</a>
                </li>
                <li>
                    <a onClick={()=>onClick('project')}>Project</a>
                </li>
                <li>
                    <a onClick={()=>onClick('contact')}>Contact</a>
                </li>
            </div>
        </nav>
   </div>
  )
}

export default Navbar;
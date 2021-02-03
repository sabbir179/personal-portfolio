import React from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            {/* <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div> */}
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li>
                {/* <a href="">Services</a> */}
                <NavLink className="nav-link" to="/projects">Porjects</NavLink>
              </li>
              {/* <li>
                <a href="">About</a>
              </li> */}
              <li>
                
                <NavLink className="nav-link" to="/experience">Experience</NavLink>
              </li>
              
              {/* <li>
                <a href="">Blog</a>
              </li> */}
              <li>
                {/* <a href="">Contact</a> */}
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
    );
};

export default Navbar;
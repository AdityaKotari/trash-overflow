import React from 'react'; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        
      <div className="navbar-fixed">
      <nav className="nav-wrapper green">
      
      <a href="#" className="brand-logo">TrashOverflow</a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons" id="hamburger">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
          <li> <NavLink className="sidenav-close" to = "/">
              Scout
         </NavLink></li>
         <li><NavLink className="sidenav-close" to = "/create_ad">
              Post notice
         </NavLink></li>
         <li><NavLink className="sidenav-close" to = "/leaderboard">
              Stats
         </NavLink></li>
         <li><NavLink className="sidenav-close" to = "/profile">
              Profile
         </NavLink></li>
          </ul>
        
      </nav>
    </div>
    ); 


 
}

export default Navbar; 
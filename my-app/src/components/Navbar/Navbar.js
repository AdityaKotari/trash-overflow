import React from 'react'; 


const Navbar = () => {
    return(
        
      <div className="navbar-fixed">
      <nav className="nav-wrapper green">
      
      <a href="#" className="brand-logo">TrashOverflow</a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons" id="hamburger">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="" >Login</a></li>
          </ul>
        
      </nav>
    </div>
    ); 


 
}

export default Navbar; 
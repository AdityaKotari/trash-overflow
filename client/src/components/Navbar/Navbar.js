
import React,{useContext,useRef,useEffect,useState} from 'react'
import {NavLink ,useHistory} from 'react-router-dom'

import {UserContext} from '../../App'; 



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

const Navbar = () => {

     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()

     const renderList = ()=>{
          if(state){
              return [
                   <ul className="right hide-on-med-and-down">
                        <li> <NavLink className="sidenav-close" to="/">
                             Scout
</NavLink></li>
                        <li><NavLink className="sidenav-close" to="/create_ad">
                             Post notice
</NavLink></li>
                        <li><NavLink className="sidenav-close" to="/leaderboard">
                             Stats
</NavLink></li>
                        <li><NavLink className="sidenav-close" to="/profile">
                             Profile
</NavLink></li>

                   </ul>

              ]
          }else{
            return [
               <ul className="right hide-on-med-and-down">
                        <li> <NavLink className="sidenav-close" to="/">
                             Scout
</NavLink></li>
                       
                        <li><NavLink className="sidenav-close" to="/leaderboard">
                             Stats
</NavLink></li>
                       
<li><NavLink className="sidenav-close" to="/signup">
                             Register
</NavLink></li>


                   </ul>
            ]
          }
        }


    return(
        
      <div className="navbar-fixed">
      <nav className="nav-wrapper indigo darken-4">
      
      <a href="#" className="brand-logo">TrashOverflow</a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons" id="hamburger">menu</i>
          </a>
         
          {renderList()}
      </nav>
    </div>
    ); 


 
}

export default Navbar; 
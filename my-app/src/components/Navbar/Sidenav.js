import React from 'react'; 
import { NavLink } from "react-router-dom";

const Sidenav = () => {
    return(
        <div>
            
            <ul className="sidenav" id="mobile-links">
                <li><NavLink className="sidenav-close" to = "/">
             
         </NavLink></li>
                <li><NavLink to="" className="brand-logo sidenav-close"><i class="black-text small material-icons">
                delete_sweep

              </i>
               TRASH OVERFLOW</NavLink>
                </li>
            <li> <NavLink className="sidenav-close" to = "/">
              <i class=" indigo-text small-text material-icons">
              cleaning_services
              </i>Scout
         </NavLink></li>
         <li><NavLink className="sidenav-close" to = "/create_ad">
              <i class=" indigo-text small-text material-icons">
                add_location_alt
              </i>Post notice
         </NavLink></li>
         <li><NavLink className="sidenav-close" to = "/leaderboard">
              <i class=" indigo-text small-text material-icons">
                leaderboard
              </i>Stats
         </NavLink></li>
         <li><NavLink className="sidenav-close" to = "/profile">
              <i class=" indigo-text small-text material-icons">
                person
              </i>Profile
         </NavLink></li>

  </ul>
        </div>
    
    ); 


 
}

export default Sidenav; 

import React,{useContext,useRef,useEffect,useState} from 'react'
import {NavLink ,useHistory} from 'react-router-dom'

import {UserContext} from '../../App'; 


const Sidenav = () => {
  const history = useHistory()

  const {state,dispatch} = useContext(UserContext)
    
     const renderList = ()=>{
          if(state){
              return [
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
         <li><NavLink className="sidenav-close" to = "/SocialFeed">
              <i class=" indigo-text small-text material-icons">
                feed
              </i>Social
         </NavLink></li>
         <li><NavLink className="sidenav-close" to="/login" onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/login')
            }}>
              <i class=" indigo-text small-text material-icons">
                logout
              </i>Logout
         </NavLink></li>


  </ul>

              ]
          }else{
            return [
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
       
       <li><NavLink className="sidenav-close" to = "/leaderboard">
            <i class=" indigo-text small-text material-icons">
              leaderboard
            </i>Stats
       </NavLink></li>
      
       <li><NavLink className="sidenav-close" to = "/login">
            <i class=" indigo-text small-text material-icons">
              login
            </i>Login
       </NavLink></li>
       

</ul>
            ]
          }
        }

    return(
        <div>
            
           {renderList()}
        </div>
    
    ); 


 
}

export default Sidenav; 
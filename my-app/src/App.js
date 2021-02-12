import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Sidenav from './components/Navbar/Sidenav'; 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './components/screens/Home'; 
import CreateAd from './components/screens/CreateAd'; 
import Leaderboard from './components/screens/Leaderboard'; 
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Profile from './components/screens/Profile'; 
import 'leaflet/dist/leaflet.css';
// 
function App() {
  return (

     <Router>
   <div className = "myApp">
    <Navbar />
        <Sidenav /> 
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create_ad">
            <CreateAd />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>

  

   </div>
   </Router> 
   
  );
}

export default App;


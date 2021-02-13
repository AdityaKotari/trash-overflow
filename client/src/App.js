import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Sidenav from './components/Navbar/Sidenav'; 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
 
} from "react-router-dom";
import {reducer,initialState} from './reducers/userReducer'
import Home from './components/screens/Home/Home'; 
import CreateAd from './components/screens/CreateAd'; 
import Leaderboard from './components/screens/Leaderboard'; 
import SignUp from './components/screens/SignUp/SignUp';
import LogIn from './components/screens/LogIn/LogIn';
import Profile from './components/screens/Profile'; 
import 'leaflet/dist/leaflet.css';

export const UserContext = createContext()


const Routing = () => 
{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  // useEffect(()=>{
  //   const user = JSON.parse(localStorage.getItem("user"))
  //   if(user){
  //     dispatch({type:"USER",payload:user})
  //   }else{
      
  //          history.push('/login')
  //   }
  // },[])

  return (
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
  ); 
 
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="myApp">
          <Navbar />
          <Sidenav />


          <Routing />


        </div>
      </Router>
    </UserContext.Provider>
   
  );
}

export default App;


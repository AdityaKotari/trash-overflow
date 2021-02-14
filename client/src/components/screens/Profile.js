import React, {useState, useEffect} from 'react'; 
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import './Profile.css'


const profileBanner ={
    height: '58vh',
    width: '100%',
    background: 'linear-gradient(135deg, rgba(26,35,126,1) 0%, rgba(87,99,230,1) 100%)',
}

const imgStyle = {
    padding:"20px", 
    width:"250px", 
    height: '250px',
    borderRadius: '50%'
  };

const TabListStyle ={
    borderBottom: '3px solid rgba(87,99,230,1)',
    margin: '0 0 10px',
    padding: '10px',
}

const TabStyle ={
    display: 'inline-block',
    border: '1px solid transparent',
    width: '50%',
    borderBottom: 'none',
    bottom: '0',
    position: 'relative',
    listStyle: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    color: 'white',
    font: 'Roboto',
    textAlign: 'center',
}
  

const Profile = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append('Authorization', "Bearer "+localStorage.getItem("jwt"));

        const myRequest = new Request('/profile/userData', {
            method: 'GET',
            headers: myHeaders
        });
        
        fetch(myRequest)
        .then(res => res.json())
        .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
    return(
        
    <div>
        <div class="container" style={profileBanner} class = "profileContainer">
            <div className="row">
                <div className='center-align'>
                    <div className='valign'>
                        <img className='responsive image' src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.0-1/p240x240/139170536_1306478816371855_6487459827788515745_o.jpg?_nc_cat=101&ccb=3&_nc_sid=7206a8&_nc_ohc=LpjJNBqtZhUAX8L3MuQ&_nc_ht=scontent.fgau1-1.fna&tp=6&oh=233b597351c9cace29627dab54368519&oe=604CD644" alt="Profile" style={imgStyle}></img>
                    </div>
                </div>
            </div>
            <div className="row" id='centerrow'>
                <div class="col s12 offset-by-6">
                <div className='center-align' style={{color: 'white', font: 'Roboto'}}><h3><p>{items.name}</p></h3></div>
                </div>
        </div>
        <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
            <TabList style={TabListStyle}>
                <Tab style={TabStyle}>Details</Tab>
                <Tab style={TabStyle}>Stats</Tab>
            </TabList>
            <TabPanel>
                <div>
                    <form className='row s12'>
                        <div className='row'>
                            <div className='input-field col s12'>
                            <i class="material-icons prefix">phone</i>
                                <input placeholder='Contact Number' id='phone' type='tel' class='validate'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                            <i class="material-icons prefix">email</i>
                                <input placeholder='Email' id='email' type='email' class='validate'></input>
                            </div>
                        </div>
                    </form>
                </div>
            </TabPanel>
            <TabPanel>
            <div className='row'>
                <div class="col s6 offset-by-3">
                    <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>{items.spotsCleaned}</b></div></span>
                    <div style={{textAlign:'center'}}><p>Spots Cleaned Up</p></div>
                    </div>
                </div>    
                </div> 
                <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>{items.spotsCleaned/10}</b></div></span>
                    <div style={{textAlign:'center'}}><p>Tier ({10-items.spotsCleaned%10} spots to level up)</p></div>
                    </div>
                </div>
                </div>
            </div>
        <div className='row'>
            <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>{items.TopPosition}</b></div></span>
                    <div style={{textAlign:'center'}}><p>Top position on Leaderboard</p></div>
                    </div>
                </div>
            </div>
            <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>{items.paymentRecieved}</b></div></span>
                    <div style={{textAlign:'center'}}><p>Payment Received</p></div>
                    </div>
                </div>
            </div>
        </div>
            </TabPanel>
        </Tabs>
        </div>

        

        
    </div>
    
    ); 


 
}


export default Profile; 
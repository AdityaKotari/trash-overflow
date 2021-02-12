import React from 'react'; 
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Profile.css'


const profileBanner ={
    height: '500px',
    width: '100%',
    background: 'rgb(26,35,126)',
    background: 'linear-gradient(135deg, rgba(26,35,126,1) 0%, rgba(87,99,230,1) 100%)',
}

const imgStyle = {
    padding: '30px',
    height: '375px',
    borderRadius: '300px'
  };
  

const Profile = () => {
    return(
        
    <div>
        <div class="container" style={profileBanner}>
            <div className="row">
                <div className='center-align'>
                    <div className='valign'>
                        <img className='responsive image' src="https://i.redd.it/jcof4raly0j41.jpg" alt="Profile" style={imgStyle}></img>
                    </div>
                </div>
            </div>
            <div className="row" id='centerrow'>
                <div class="col s12 offset-by-6">
                <div className='center-align' style={{color: 'white', font: 'Roboto'}}><h3><p>John Doe</p></h3></div>
                </div>
        </div>
        </div>
        <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
            <TabList>
                <Tab>Details</Tab>
                <Tab>Stats</Tab>
            </TabList>
            <TabPanel>
                Random Stuff
            </TabPanel>
            <TabPanel>
            <div className='row'>
                <div class="col s6 offset-by-3">
                    <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">42</span>
                    <p>Spots Cleaned Up Yet</p>
                    </div>
                </div>    
                </div> 
                <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">10,000</span>
                    <p>Rewards Earned Till Now</p>
                    </div>
                </div>
                </div>
            </div>
        <div className='row'>
            <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">2</span>
                    <p>Top Position on Leaderboard</p>
                    </div>
                </div>
            </div>
            <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">56,000</span>
                    <p>Payment Received</p>
                    </div>
                </div>
            </div>
        </div>
            </TabPanel>
        </Tabs>
        

        
    </div>
    
    ); 


 
}


export default Profile; 
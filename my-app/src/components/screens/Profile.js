import React from 'react'; 
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import './Profile.css'


const profileBanner ={
    height: '461px',
    width: '100%',
    background: 'linear-gradient(135deg, rgba(26,35,126,1) 0%, rgba(87,99,230,1) 100%)',
}

const imgStyle = {
    padding: '30px',
    height: '275px',
    borderRadius: '200px'
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
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList style={TabListStyle}>
                <Tab style={TabStyle}>Details</Tab>
                <Tab style={TabStyle}>Stats</Tab>
            </TabList>
            <TabPanel>
                <div>
                    <form className='row s12'>
                        <div className='row'>
                            <div className='input-field col s12'>
                            <i class="material-icons prefix">home</i>
                                <input placeholder='First Address Line' id='first_address_line' type='text' class='validate'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                            <i class="material-icons prefix">home</i>
                                <input placeholder='Second Address Line' id='second_address_line' type='text' class='validate'></input>
                            </div>
                        </div>
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
                    <span class="card-title"><div style={{textAlign:'center'}}><b>42</b></div></span>
                    <div style={{textAlign:'center'}}><p>Spots Cleaned Up Yet</p></div>
                    </div>
                </div>    
                </div> 
                <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>10,000</b></div></span>
                    <div style={{textAlign:'center'}}><p>Rewards Earned Till Now</p></div>
                    </div>
                </div>
                </div>
            </div>
        <div className='row'>
            <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>2</b></div></span>
                    <div style={{textAlign:'center'}}><p>Leaderboard Position</p></div>
                    </div>
                </div>
            </div>
            <div class="col s6 offset-by-3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title"><div style={{textAlign:'center'}}><b>56,000</b></div></span>
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
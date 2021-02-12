import React from 'react'; 

import './Profile.css'

const profileBanner ={
    height: '400px',
    width: '100%',
    background: 'linear-gradient(135deg, rgba(10,4,60,1) 0%, rgba(9,9,121,1) 32%, rgba(3,80,111,1) 100%)'
}

const imgStyle = {
    height: '200px',
    width: 'auto'
  };
  

const Profile = () => {
    return(
        
    <div>
        <div class="container" style={profileBanner}>
            <div className="row">
                <div className='center-align'>
                    <div className='valign'>
                        <img className="circle responsive-img" src="https://i.redd.it/jcof4raly0j41.jpg" alt="Profile" style={imgStyle}></img>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row" id='centerrow'>
                <div class="col s12">
                <div className='center-align'><h1><p>John Doe</p></h1></div>
                </div>
        </div>
         <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3"><a href="#test1">Test 1</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
      </ul>
    </div>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">
    <div class="row">
            <div class="col s3">
                    <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">42</span>
                    <p>Spots Cleaned Up Yet</p>
                    </div>
                </div>    
            </div> 
                
            <div class="col s3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">10,000</span>
                    <p>Rewards Earned Till Now</p>
                    </div>
                </div>
            </div>
            <div class="col s3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">2</span>
                    <p>Top Position on Leaderboard</p>
                    </div>
                </div>
            </div>
            <div class="col s3">
                <div class="card pink lighten-5">
                    <div class="card-content black-text">
                    <span class="card-title">56,000</span>
                    <p>Payment Received</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

        
    </div>
    
    ); 


 
}


export default Profile; 
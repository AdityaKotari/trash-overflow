import React from 'react'; 

const imgStyle = {
    padding: '30px',
    height: '275px',
    borderRadius: '200px'
  };

const Leaderboard = () => {
    return(
    <div>
        <div className='row' style={{padding: '5px', alignContent: 'center'}}><h2>Leaderboard</h2></div>
        <div className="row">
            <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">Rank 1</span>
                <div className='row'>
                <div className='col s6'>
                    <img className='responsive image' src="https://i.redd.it/jcof4raly0j41.jpg" alt="Profile" style={imgStyle}></img>
                </div>
    
                <h2><p>John Doe</p></h2>
                <h4><p>42</p></h4>
                <h5><p>Spots Cleaned</p></h5>
                
                <h4><p>56,000</p></h4>
                <h5><p>Income Earned</p></h5>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
); 


 
}

export default Leaderboard; 
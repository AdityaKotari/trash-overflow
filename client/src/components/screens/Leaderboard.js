import React, {useState, useEffect} from 'react';

const imgStyle = {
    padding: '30px',
    height: '40vh',
    borderRadius: '200px'
  };

const Leaderboard = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
    fetch("/profile/leaderboard")
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
        <div className='row' style={{padding: '5px', alignContent: 'center'}}><h2>Leaderboard</h2></div>
        {items.map((user,index) => (
            <div className="row">
            <div className="col s12">
            <div className="card blue-grey darken-1" style={{height: '60vh'}}>
                <div className="card-content white-text">
                <span className="card-title">Rank {index+1}</span>
                <div className='row'>
                <div className='col s6'>
                    <img className='responsive image' src="https://i.redd.it/jcof4raly0j41.jpg" alt="Profile" style={imgStyle}></img>
                </div>
                <div className='col s6' style={{paddingInline:'10px', paddingLeft: '10px', textAlign:'center'}}>
                <h3><p>{user.name}</p></h3>
                <h4><p>{user.spotsCleaned}</p></h4>
                <h5><p>Spots Cleaned</p></h5>
                <h4><p>{user.paymentRecieved}</p></h4>
                <h5><p>Income Earned</p></h5>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
); 


 
}

export default Leaderboard; 
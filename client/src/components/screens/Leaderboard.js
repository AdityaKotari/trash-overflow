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
        <div className='row center'><h4>Leaderboard</h4>
        <span style = {{fontWeight: "bold"}}>Our community of green warriors</span></div>
       
        {items.map((user) => (
            <div class="row">
            <div class="col s12 m7">
              <div class="card" key = {user._id}>
                <div class="card-image">
                  <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                  <span class="card-title">{user.name}</span>
                </div>
                <div class="card-content">
                  <p><span style = {{fontWeight: "bold", color: "orange"}} >SPOTS CLEANED: </span> {user.spotsCleaned} </p>
                  <p><span style = {{fontWeight: "bold",  color: "orange"}}>PAYMENT RECEIVED: </span> {user.paymentRecieved} </p>
                  
                </div>
               
              </div>
            </div>
          </div>
        ))}
    </div>
); 


 
}

export default Leaderboard; 

{/* <div className="row">
            <div className="col s12">
            <div className="card blue-grey darken-1" style={{height: '60vh'}}>
                <div className="card-content white-text">
                <span className="card-title">Rank {index+1}</span>
                <div className='row'>
                <div className='col s12' style={{paddingInline:'10px', paddingLeft: '10px', textAlign:'center'}}>
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
        </div> */}
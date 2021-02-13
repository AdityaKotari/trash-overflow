import React, {useState, useEffect} from 'react'; 


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
        <h2>Leaderboard</h2>
        <ul>
            {items.map(user => (
                <li>{user.name} - {user.spotsCleaned}</li>
            ))}
        </ul>
    </div>
    ); 


 
}

export default Leaderboard; 
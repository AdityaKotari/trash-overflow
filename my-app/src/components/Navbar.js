import React from 'react'; 


const Navbar = () => {
    return(
        
        <nav>
   <div className="nav-wrapper pink lighten-5">
      <form>
         <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" for="search" cyan-text text-darken-4><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
         </div>
      </form>
   </div>
</nav>
    ); 


 
}

export default Navbar; 
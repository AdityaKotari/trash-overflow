import React,{useState,useContext,useEffect} from 'react'
import { Icon } from "leaflet";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { geolocated } from "react-geolocated";

import {Link,NavLink,useHistory} from 'react-router-dom'
import M from 'materialize-css'

export const icon = new Icon({
  iconUrl: "/images/placeholder.svg",
  iconSize: [25, 25]
});

const CreateAd = (props) => {
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [center,setCenter] = useState([0,0])
    const [lat,setLat] = useState("")
    const [lng,setLng] = useState("")
    const [reward, setReward] = useState("")
    const [description, setDescription ] = useState("")
   
    const [photoURL, setPhotoURL ] = useState("")
    const {isGeolocationAvailable,isGeolocationEnabled, coords } = props; 
    
    
  useEffect(()=>{
       if (coords)
       {
           setLat(coords.latitude); 
           setLng(coords.longitude); 
           setCenter([coords.latitude, coords.longitude])
           
       }
 },[coords])
         

   
    const uploadAdDetails = () => 

    {
        
        fetch("/garbage/newGarbage",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({lng, lat, reward, description, photoURL})
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Notice added",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    

    return (
   
    


<div>
        
       <MapContainer id="postMap" center={[26.1619712, 91.7635072]} zoom={14} scrollWheelZoom={true} zoomControl={false}>
           <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
           <Marker position={center} icon={icon}>
               <Popup>
  
                 
  
  
  
  
  
               </Popup>
           </Marker>
       </MapContainer>
       <nav>
   <div class="nav-wrapper #607d8b blue-grey">
     <form>
       <div class="input-field">
         <input id="search" type="search" required />
         <label class="label-icon" for="search"><i class="material-icons">search</i></label>
         <span>Enter location</span>
         <i class="material-icons">close</i>
       </div>
     </form>
   </div>
  </nav>
  
  
       <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "0px", border: "1px solid #EEE" }}>
      <div className="container">
          <div className="center">
           <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>
            
               <div className='row'>
                

                    <div class="input-field col s7">
                   <i class="material-icons prefix indigo-text">location_on</i>
                       <input   id="first_name" type="text" className="validate geog"  value = {lat.toString()} onChange={(e)=>setLat(e.target.value)} />
                       
                   </div>
                   <div class="input-field col s5">
                   
                       <input   id="first_name" type="text" className="validate geog"  value = {lng.toString()} onChange={(e)=>setLat(e.target.value)} />
                       
                   </div>
                  
               </div>
  
               <div className='row'>
                   <div className='input-field col s12'>
                   <i class="material-icons prefix indigo-text">attach_money</i>
                       <input id="reward" className='validate' type="number" className="validate"  value = {reward} onChange={(e)=>setReward(e.target.value)}/>
                       <label for='reward'>Price offered</label>
                   </div>
               </div>
               <div className='row'>
                   <div className='input-field col s12'>
                   <i class="material-icons prefix indigo-text">view_list</i>
                       <input id="title" className='validate' type="text" className="validate"  value = {title} onChange={(e)=>setTitle(e.target.value)}/>
                       <label for='reward'>Title</label>
                   </div>
               </div>
  
               <div className="row">
                   <form className="col s12">
                       <div className="row">
                           <div className="input-field col s12">
                           <i class="material-icons prefix indigo-text">description</i>
                               <textarea id="textarea1" className="materialize-textarea" onChange={(e)=>setDescription(e.target.value)}></textarea>
                               <label for="textarea1">Description</label>
                           </div>
                       </div>
                   </form>
               </div>
  
              
               <center>
                   <div className='row'>
                       <button type='submit' name='btn_signup' className='col s12 btn btn-large waves-effect indigo'  onClick={()=> uploadAdDetails() }>POST</button>
                   </div>
               </center>
           </form>
           
  
           <div className="gap"></div>
       </div>
       </div>
  
   </div> 



   </div>
       










     


        
     

          

    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(CreateAd);
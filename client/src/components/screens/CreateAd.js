import React,{useState,useContext,useEffect} from 'react'
import { Icon } from "leaflet";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { geolocated } from "react-geolocated";

import {Link,NavLink,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import { set } from 'mongoose';

export const icon = new Icon({
  iconUrl: "/images/placeholder.svg",
  iconSize: [25, 25]
});

const CreateAd = (props) => {
    const history = useHistory()
    const [address,setAddress] = useState("")
    const [title,setTitle] = useState("")
    const [center,setCenter] = useState([0,0])
    const [lat,setLat] = useState("")
    const [lng,setLng] = useState("")
    const [reward, setReward] = useState("")
    const [description, setDescription ] = useState("")
    const [image,setImage] = useState("")
    
   
    const [photoURL, setPhotoURL ] = useState("")
    const {isGeolocationAvailable,isGeolocationEnabled, coords } = props; 
   
    useEffect(() => {
        M.toast({html: "Obtaining your location...",classes:"#01579b light-blue darken-4", 
        completeCallback: function(){ M.toast({html:"Location traced",classes:"#43a047 green darken-1"
     })}} )
    }, [])
    
  useEffect(()=>{
       if (coords)
       {
           setLat(coords.latitude); 
           setLng(coords.longitude); 
           setCenter([coords.latitude, coords.longitude])
           
       }
 },[coords])



 const imageDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","trash-overflow")
    data.append("cloud_name","dngglmcuk")
    fetch("https://api.cloudinary.com/v1_1/dngglmcuk/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.error){
            M.toast({html: "Please add a photograph",classes:"#c62828 red darken-3"})
         }
         else
         {
            setPhotoURL(data.url)
         }
        
    })
    .catch(err=>{
        
        console.log(err)
    })

 
}
         

useEffect(() => {
     if (photoURL)
     {
        console.log("Lat", lat); 
        console.log("Lng", lng)
        fetch("/garbage/newGarbage",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({lng, lat, reward, description, photoURL, title, address})
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


}, [photoURL])   


   
   
    

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
  
  
       <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "48px", border: "1px solid #EEE" }}>
 
          <div className="center">
           <form className="col s12" onSubmit={(e)=>{e.preventDefault()}}>
            
               <div className='row'>
                

                  
                  
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
           
         <div className='input-field col s12'>
                            <i className="material-icons prefix indigo-text">location_city</i>
                            <input className='validate' type="text" className="validate" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <label for='address'>Location name</label>
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
                            <div className="file-field input-field">
                                <div className="btn #64b5f6 indigo">
                                    <span>Upload Image</span>
                                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                            </div>
  
              
               <center>
                   <div className='row'>
                       <button type='submit' name='btn_signup' className='col s12 btn btn-large waves-effect indigo'  onClick={()=> imageDetails() }>POST</button>
                   </div>
               </center>
           </form>
           
  
           <div className="gap"></div>
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
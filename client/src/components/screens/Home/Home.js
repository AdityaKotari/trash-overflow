import React, {Component, useState,useEffect,useContext} from 'react';
import { Icon } from "leaflet";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


import { icon } from '../../MapUtilities/Icons/Icon'; 

// export const icon = new Icon({
//   iconUrl: "/images/placeholder.svg",
//   iconSize: [25, 25]
// });




const Home = () => {

  

  const [data,setData] = useState([]);
 
  useEffect(()=>{
     fetch('/garbage/allGarbage',{
       
     }).then(res=>res.json())
     .then(result=>{
         
         setData(result); 
         console.log(data);
     })
  },[])

   return (

    <div>
      <MapContainer className="mapclass"  center={[26.7509, 94.2037]} zoom={13} scrollWheelZoom={true} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[24.833946, 92.779282]}  icon={icon}>
          <Popup>
            
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="https://images.unsplash.com/photo-1537084642907-629340c7e59c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Wet Organic Waste</span>
                <p><a href="#">NIT Silchar</a></p>
                <ul>
                  <p>Area is 40 square m. Rich in organic wastes.</p>
                </ul>
              </div>
              <div class="card-action">
                <a href="#">ACCEPT OFFER</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">&#8377; 500<i class="material-icons right">close</i></span>
                <ul>
                  <li>40 sq m</li>
                  <li>Contains valuables</li>
                </ul>
              </div>
            </div>


          
         
         
</Popup>
        </Marker> */}

{data.map((item) => (
  <Marker
    key={item._id}
    position={[
      item.lat,
      item.lng
    ]}

    icon={icon}
  >
    <Popup><div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={item.photo} />
      </div>
      <div className="card-content">
        <span class="card-title activator grey-text text-darken-4">{item.title}</span>
        <p><a href="#"><b><h5>&#8377;{item.reward} offered</h5></b></a>  </p>
        <p>
  <a href="#" style={{ textTransform: 'uppercase', fontWeight:'bold'}} >{item.address} </a>  </p>
        <ul>
          <p>{item.description}</p>
        </ul>
      </div>
      <div className="card-action">
        <a href="#" style = {{color: "black" , fontWeight:"bold"}}> Posted by  {item.postedBy.name}</a>
       </div>
      <div className="card-reveal">
      <span className="card-title orange-text text-black-4">{item.postedBy.name}<i class="material-icons right">close</i></span>
      <br></br>
      <div class="card-image waves-effect waves-block waves-light">
        <img src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
      </div>
      <ul className="collection">
      <li className="collection-item avatar">
      <i className="material-icons circle indigo">phone</i>
      <span className="title" style = {{color: "black" , fontWeight:"bold"}}>Contact</span>
      <p>{item.postedBy.phone}
      </p>
      
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle indigo">location_on</i>
      <span className="title" style = {{color: "black" , fontWeight:"bold"}}>Landmark</span>
      <p>{item.address}
      </p>
      
    </li>

      </ul>
       
        <ul>
         
                





 


        </ul>
      </div>
    </div>
    </Popup>
  </Marker>
      ))}
 

      </MapContainer>



    </div>

  )
}


// class Home extends Component{


//     render()
//     {
//         return (

//           <div>
//             <MapContainer className="mapclass"  center={[24.826921, 92.784841]} zoom={14} scrollWheelZoom={true}>
//               <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <Marker position={[24.833946, 92.779282]}  icon={icon}>
//                 <Popup>
                  
//                   <div class="card">
//                     <div class="card-image waves-effect waves-block waves-light">
//                       <img src="https://images.unsplash.com/photo-1537084642907-629340c7e59c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
//                     </div>
//                     <div class="card-content">
//                       <span class="card-title activator grey-text text-darken-4">Wet Organic Waste</span>
//                       <p><a href="#">NIT Silchar</a></p>
//                       <ul>
//                         <p>Area is 40 square m. Rich in organic wastes.</p>
//                       </ul>
//                     </div>
//                     <div class="card-action">
//                       <a href="#">ACCEPT OFFER</a>
//                     </div>
//                     <div class="card-reveal">
//                       <span class="card-title grey-text text-darken-4">&#8377; 500<i class="material-icons right">close</i></span>
//                       <ul>
//                         <li>40 sq m</li>
//                         <li>Contains valuables</li>
//                       </ul>
//                     </div>
//                   </div>


                
               
               
//     </Popup>
//               </Marker>
//             </MapContainer>

//             <Modal />

//           </div>

//         )
//     }
// }

export default Home; 
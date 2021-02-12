import React, {Component} from 'react';
import { Icon } from "leaflet";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Modal from './Modal';

export const icon = new Icon({
  iconUrl: "/images/placeholder.svg",
  iconSize: [25, 25]
});

class Home extends Component{


    render()
    {
        return (

          <div>
            <MapContainer className="mapclass"  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}  icon={icon}>
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
              </Marker>
            </MapContainer>

            <Modal />

          </div>

        )
    }
}

export default Home; 
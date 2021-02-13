import React from 'react';
import { Icon } from "leaflet";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export const icon = new Icon({
  iconUrl: "/images/placeholder.svg",
  iconSize: [25, 25]
});

const CreateAd = () => {
    return (

        <div>
            <MapContainer id="postMap" center={[24.826921, 92.784841]} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.833946, 92.779282]} icon={icon}>
                    <Popup>

                      





                    </Popup>
                </Marker>
            </MapContainer>



            <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE" }}>

                <form className="col s12" method="post">

                    <div className='row'>
                        <div class="input-field col s6">
                        <i class="material-icons prefix">location_on</i>
                            <input id="first_name" type="number" className="validate" />
                            <label for="first_name">LAT</label>
                        </div>
                        <div class="input-field col s5">
                            <input id="last_name" type="number" className="validate" />
                            <label for="last_name">LONG</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col s12'>
                        <i class="material-icons prefix">attach_money</i>
                            <input id="reward" className='validate' type="number" className="validate" />
                            <label for='reward'>Price offered</label>
                        </div>
                    </div>

                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                <i class="material-icons prefix">description</i>
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label for="textarea1">Description</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <br />
                    <center>
                        <div className='row'>
                            <button type='submit' name='btn_signup' className='col s12 btn btn-large waves-effect indigo'>POST</button>
                        </div>
                    </center>
                </form>

                <div className="gap"></div>
            </div>


        </div>




        
     

          

    )
}

export default CreateAd;
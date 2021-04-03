import React, {Component, useState,useEffect,useContext} from 'react';
import { Icon } from "leaflet";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export const icon = new Icon({
  iconUrl: "/images/placeholder.svg",
  iconSize: [25, 25]
});

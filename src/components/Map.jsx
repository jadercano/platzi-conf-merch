import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: data?.lat || 1.1234567,
    lng: data?.lng || -99.123456,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDIY1tdQNtLE_Xg0-OyjY2xX9GKzNSE39s">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

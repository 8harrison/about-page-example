'use client';
import {
  GoogleMap,
  Marker,
  LoadScript,
  DirectionsRenderer,
  DirectionsService,
  Libraries,
} from '@react-google-maps/api';
import { useCallback, useEffect, useMemo, useState } from 'react';    

const PLACES: Libraries = ['places']; 
const API_KEY = 'AIzaSyDPBWbzXYI8ypoPnmBKJ2XonmQ47b_CoQM';
var origin = { lat: 55.930385, lng: -3.118425 };
var destination = { lat: 50.087692, lng: 14.42115 };

export default function Mapa() {
  const [map, setMap] = useState<google.maps.Map>();
  const [pointB, setPOintB] = useState<google.maps.LatLngLiteral>();
  const [response, setResponse] =
    useState<google.maps.DistanceMatrixResponse>();

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const placesOptions = useMemo(() => {
    return PLACES;
  }, []);

  const directionServiceOption = useMemo(() => {
    return {
      origin,
      destination,
      travelMode: 'DRIVING',
    };
  }, []);

  const directionsCallBack = useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRenderOptions = useMemo(() => {
    return {
      directions: response,  
    };
  }, []);

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={placesOptions}>
      <GoogleMap
        onLoad={onMapLoad}
        center={origin}
        mapContainerStyle={{ width: '400px', height: 'auto' }}
        zoom={4}
      >
        <Marker position={origin} />
        <Marker position={destination} />
        <DirectionsService
          options={directionServiceOption}
          callback={directionsCallBack}
        />
        {response && <DirectionsRenderer options={directionsRenderOptions} />}
      </GoogleMap>
    </LoadScript>
  );
}

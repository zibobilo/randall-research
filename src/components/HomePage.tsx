// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useMemo, useState } from 'react';
import data from './Data/customerDataTest.json';
import AllDist from './KMeans/AllDist'
import MinWI from './KMeans/MinWI'
import avg from './KMeans/avg'
import google, { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

interface kInfoHistory {
  iteration: Number,
  lat?: Number,
  lng?: Number,
  customerID?: Number
}

interface kInfoModel {
  id: Number,
  history: kInfoHistory
}


const HomePage = () => {

  const [distances, setDistances] = useState(useMemo(() => AllDist(data), []))
  const [minValues] = useState(useMemo(() => distances.map(row => MinWI(row)), []))
  const [k, setK] = useState(2)
  const createKObj = () => { }

  const [kInfo, setKInfo] = useState([] as kInfoModel[])

  const [map, setMap] = useState(null)

  console.log(data)
  console.log(distances)
  console.log(minValues)
  // console.log(typeof minValues.map(e => e.value))

  function setMarkers(data) {
    let markers = []
    for (let i = 0; i < data.length; i++) {
      let customer = { lat: data[i].lat, lng: data[i].lng };
      let marker = new window.google.maps.Marker({ position: customer, map })
      markers.push(marker)
    }
    return markers
  }

  const containerStyle = {
    width: '100vw',
    height: '400px'
  };

  const center = {
    lat: 11.7837440036237,
    lng: -86.514484975487
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'blabla'
  })



  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
      setMarkers(data)
    }, []
  )



  return <div className='flex flex-col justify-center m-auto w-fit min-h-screen text-center'>
    <h1 className="text-3xl">Randall Research</h1>
    <p>
      <b>Hardware:</b> Raspberry Pi 4, 4GB Model B with 1.5GHz 64-bit quad-core CPU
    </p>
    <p>
      <b>Operating System:</b> Linux 5.15.30-v8+ aarch64 GNU/Linux
    </p>
    <br />

    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
      >
        <></>
      </GoogleMap>
    ) : <></>}


  </div>
}

export default HomePage
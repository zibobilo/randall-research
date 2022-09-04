import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useState, useCallback, memo } from 'react';
import TestData from './Data/testData'

const HomePage = () => {
  console.log(TestData)

  function setMarkers() {
    for (var i = 0; i < TestData; i++) {
      var customer = { lat: TestData[i].lat, lng: TestData[i].lat };
      var markers = []
      var marker = new window.google.maps.Marker({
        position: customer,
        map: map
      })
      markers += marker
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
    id: 'google-map-script'
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
    setMarkers()
  }, [])



  return <div className='flex flex-col justify-center m-auto w-fit min-h-screen text-center'>
    <h1 className="text-3xl">Randall Research</h1>
    <p>
      <b>Hardware:</b> Raspberry Pi 4 4GB Model B with 1.5GHz 64-bit quad-core CPU
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
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : <></>}

  </div>
}

export default memo(HomePage)
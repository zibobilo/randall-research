// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import data from './Data/customerDataTest.json';
// import allData from './Data/customerDataTest.json';
// import allData from './Data/customerData.json';
// import AllDist from './KMeans/AllDist'
// import MinWI from './KMeans/MinWI'
// import avg from './KMeans/avg'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { isLatLngLiteral } from "@googlemaps/typescript-guards";



// interface kInfoHistory {
//   iteration: Number,
//   lat?: Number,
//   lng?: Number,
//   customerID?: Number
// }

// interface kInfoModel {
//   id: Number,
//   history: kInfoHistory
// }

// function MyMapComponent(center, zoom) {
//   const ref = useRef();

//   useEffect(() => {
//     new window.google.maps.Map(ref.current, {
//       center,
//       zoom,
//     });
//   });

//   return <div ref={ref} id="map" />;
// }
import { Wrapper, Status } from "@googlemaps/react-wrapper";



function MyMapComponent({center, zoom}) {
  const ref = useRef()

  useEffect(() => {
    new window.google.maps.Map(ref.current, {center,zoom})
  });

  return <div ref={ref} id="map" />;
}

const render = (status) => {
  console.log(status)
  switch (status) {
    case Status.LOADING:
      return <h1>LOADING</h1>;
    case Status.FAILURE:
      return <h1>ERROR</h1>;
    case Status.SUCCESS:
      return <>


      <h1>IT WORKED</h1>
      <MyMapComponent />





      </>;
  }
};


const HomePage= () => <Wrapper apiKey={process.env.REACT_APP_GOOGLEAPI} render={render} />


// const HomePage = () => {
  // const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({ lat: 12.92, lng: -85 });
  // const [distances, setDistances] = useState(useMemo(() => AllDist(data), []))
  // const [minValues] = useState(useMemo(() => distances.map(row => MinWI(row)), []))
  // const [k, setK] = useState(2)
  // const createKObj = () => { }
  // const [kInfo, setKInfo] = useState([] as kInfoModel[])
  // const ref = React.useRef<HTMLDivElement>(null);
  // const [map, setMap] = React.useState<google.maps.Map>();

//   React.useEffect(() => {
//   if (!map) {
//     setMap(new window.google.maps.Map(ref.current, {}));
//   }
// }, [ref, map]);

// console.log(Wrapper)
// const render = (status) => {
//   switch (status) {
//     case Status.LOADING:
//       return <h1>LOADING</h1>;
//     case Status.FAILURE:
//       return <h1>ERROR</h1>;
//     case Status.SUCCESS:
//       return <MyMapComponent />;
//   }
// };

// return <Wrapper apiKey={"YOUR_API_KEY"}>
//     <MyMapComponent center={{ lat: 12.92, lng: -85 }} zoom={7} />
//   </Wrapper>

  // return (
  //   <div className='flex flex-col justify-center m-auto w-fit min-h-screen text-center'>
  //     <h1 className="text-3xl">Randall Research</h1>
  //     <p>
  //       <b>Hardware:</b> <a style={{ color: 'blue' }} href="https://www.amazon.com/Raspberry-Model-2019-Quad-Bluetooth/dp/B07TC2BK1X"><u>Raspberry Pi 4</u></a>, 4GB Model B with 1.5GHz 64-bit quad-core CPU
  //     </p>
  //     <p>
  //       <b>Operating System:</b> Linux 5.15.30-v8+ aarch64 GNU/Linux
  //     </p>
  //     <br />
  //     <Wrapper apiKey={"AIzaSyD_NUByxoPmKNYkO82PcLXnyNqzk_7DzBw"}>
  //       <Map center={center} zoom={7}>
  //         <Marker position={{ lat: 12.92, lng: -85 }} />
  //       </Map>
  //     </Wrapper>



  //   </div>
  // )
// }

export default HomePage
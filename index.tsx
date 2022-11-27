import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { SideBar } from "./SideBar"
import { Map } from "./Map"
import { MarkerManager } from "./MarkerManager"



const App = () => {
  const test = (status: Status) => { if(status === "SUCCESS") setIsReady(true) }
  const [positions, setPositions] = useState<google.maps.LatLng[]>([])
  const [zoom, setZoom] = useState(10)
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat: 12, lng: -86.2 })
  const [isReady, setIsReady] = useState(false)

  const updatePositions = (newPositions) => {
    setPositions(newPositions)
  }

  return (
    <div className="flex h-full">
      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} callback={test}>
        <Map {...{ zoom, center }} className="flex-grow h-full">
          { isReady && <MarkerManager {...{positions, updatePositions}}/> }
        </Map>
      </Wrapper>
      <SideBar {...{ zoom, setZoom, center, setCenter, positions, updatePositions }} />
    </div>
  )
}

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root")!)
  root.render(<App />)
})


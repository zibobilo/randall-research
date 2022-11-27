import React from "react"
import data from "./components/Data/customerDataTest.json"
export const SideBar = (props: any) => {
    const newPositions = data.map(c => { return { lat: c.lat, lng: c.lng } })
    const { zoom, setZoom, center, setCenter, positions, updatePositions } = props
    return (
        <div className="p-4 overflow-auto h-full">

            <h3>Zoom</h3>
            <input className="border-2" type="number" id="zoom" name="zoom" value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))} />

            <h3>Latitude</h3>
            <input className="border-2" type="number" id="lat" name="lat" value={center.lat}
                onChange={(e) => setCenter({ ...center, lat: Number(e.target.value) })} />

            <h3>Longitude</h3>
            <input className="border-2" type="number" id="lng" name="lng" value={center.lng}
                onChange={(e) => setCenter({ ...center, lng: Number(e.target.value) })} />

            <h3>{positions.length === 0 ? "" : "Customer Data"}</h3>

            <div className=" max-h-40 border-4 overflow-y-scroll">
                {positions.map((latLng, i) => (<div key={i}>{i+1} - lat: {Number(latLng.lat).toFixed(3)} lng: {Number(latLng.lng).toFixed(3)}</div>))}
            </div>

            <button className="btn-yellow" onClick={ () => updatePositions([{lat:0, lng:0}]) }>CLEAR</button>
            <button className="btn-green" onClick={ () => updatePositions(newPositions) }>RUN ALGORITHM</button>       
        </div>
    )
} 
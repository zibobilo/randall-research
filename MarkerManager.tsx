import React from "react"
import { Marker } from "./Map"
import data from "./components/Data/customerDataTest.json"

export const MarkerManager = (props) => {
    console.log(props)
    const { map, positions, updatePositions } = props
    if(positions.length === 0) {
        const newPositions = data.map(c => { return { lat: c.lat, lng: c.lng } })
        updatePositions(newPositions)
    }
    return <>
        {positions.map(
            (position, i) => <Marker key={i} {...{ map, position }} />
        )}
    </>
}
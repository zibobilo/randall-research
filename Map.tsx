import { isLatLngLiteral } from "@googlemaps/typescript-guards"
import { createCustomEqual } from "fast-equals"
import React, { cloneElement, EffectCallback, FC, ReactNode, useEffect, useRef, useState } from "react"

export const Map: any = ({ onClick, onIdle, children, className, ...options }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map>()

    useEffect(() => { ref.current && !map && setMap(new window.google.maps.Map(ref.current, {})) }, [ref, map])

    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffectForMaps(() => map && map.setOptions(options), [map, options])
    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((e) => google.maps.event.clearListeners(map, e))
            if (onClick) map.addListener("click", onClick)
            if (onIdle) map.addListener("idle", () => onIdle(map))
        }
    }, [map, onClick, onIdle])

    return (
        <>
            <div ref={ref} className={className} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return cloneElement(child, { map })
                }
            })}
        </>
    )
}

export const Marker: FC<google.maps.MarkerOptions> = (options) => { new google.maps.Marker(options); return null}

const deepCompareEqualsForMaps = createCustomEqual(
    (deepEqual) => (a: any, b: any) => {
        if (isLatLngLiteral(a) || a instanceof google.maps.LatLng || isLatLngLiteral(b) || b instanceof google.maps.LatLng) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
        }

        // TODO extend to other types

        // use fast-equals for other objects
        return deepEqual(a, b)
    }
)

function useDeepCompareMemoize(value: any) {
    const ref = useRef()
    if (!deepCompareEqualsForMaps(value, ref.current)) ref.current = value
    return ref.current
}

function useDeepCompareEffectForMaps(callback: EffectCallback, dependencies: any[]) {
    useEffect(callback, dependencies.map(useDeepCompareMemoize))
}
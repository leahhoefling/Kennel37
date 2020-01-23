import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
        </div>
    )
}
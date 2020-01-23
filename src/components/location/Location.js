import React from "react"
import "./Location.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
    </section>
)
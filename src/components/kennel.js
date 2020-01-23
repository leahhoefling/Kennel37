import React from "react"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import EmployeeList from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import "./Kennel.css"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            {/* the list here is a child element of the provider */}
            <LocationList />
        </LocationProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            {/* the list here is a child element of the provider */}
            <EmployeeList />
        </EmployeeProvider>
    </>
)
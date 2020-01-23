import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
//this is just a react library context api in order to create context that other components can use-- everyone has access to this
export const LocationContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {

    //index 0 is the name of the array and index 1 is the name of the function you want to use to set that array
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
        // this array basically says to update the state when the thing in the array changes
    }, [locations])

    return (
        //this is what from the context you want to expose to other components
        <LocationContext.Provider value={{
            locations, addLocation
        }}>
            {/* any child thatis specified in kennel.js.... render them here and give them access to the above context*/}
            {props.children}
        </LocationContext.Provider>
    )
}
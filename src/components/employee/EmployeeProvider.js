import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
//this is just a react library context api in order to create context that other components can use-- everyone has access to this
export const EmployeeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = (props) => {

    //index 0 is the name of the array and index 1 is the name of the function you want to use to set that array
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }


    //basically this is "do this when the component mounts" OR do this if the data inside the array at the end changes... if there's nothing in the array then it is just on mount
    useEffect(() => {
        getEmployees()
        //this empty array prevents an infinite loop- V IMPORTANT
    }, [])

    useEffect(() => {
        console.log("****  EMPLOYEE APPLICATION STATE CHANGED  ****", employees)
        // this array basically says to update the state when the thing in the array changes
    }, [employees])

    return (
        //this is what from the context you want to expose to other components
        <EmployeeContext.Provider value={{
            employees, addEmployee
        }}>
            {/* any child thatis specified in kennel.js.... render them here and give them access to the above context*/}
            {props.children}
        </EmployeeContext.Provider>
    )
}
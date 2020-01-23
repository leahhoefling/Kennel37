import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"

export default () => {
    const { employees } = useContext(EmployeeContext)
    console.log(employees);


    return (
        <div className="employees">
            {
                employees.map(emp => <Employee key={emp.id} employee={emp} />)
            }
        </div>
    )
}
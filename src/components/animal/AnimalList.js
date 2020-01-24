import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export default () => {
    const { animals } = useContext(AnimalContext)
    console.log("animals", animals);


    return (
        <div className="animals">
            {
                animals.map(ani => <Animal key={ani.id} animal={ani} />)
            }
        </div>
    )
}
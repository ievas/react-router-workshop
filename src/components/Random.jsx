import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect} from "react"

export default function Random() {

    let [color, setColor] = useState("#000000")

    function randomColor(){
        //generate a random color
        //how to?
    }

    useEffect(() => {
        //make a call to the color api with that randomly generated color
    })

    return (
        <div id="random-color-container">
            <h1>{color}</h1>
        </div>
    )
}
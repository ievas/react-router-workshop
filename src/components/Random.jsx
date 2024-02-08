import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect} from "react"

export default function Random() {

    let [color, setColor] = useState("#000000")

    function randomColor(){

        let randomColor = Math.floor(Math.random()*16777215).toString(16); //from https://css-tricks.com/snippets/javascript/random-hex-color/;

        setColor(`#${randomColor}`);
    }

    useEffect(() => {
        randomColor();
        
    }, [])

    let backgroundColor = color !== "#000000" ? {backgroundColor: color } : {};

    return (
        <div id="random-color-container" style={backgroundColor}>
            <h1>{color}</h1>
        </div>
    )
}
import { useState } from "react"

export default function Pick() {

    let [color, setColor] = useState("#000000")

    function handleColor(e) {
        setColor(e.target.value);
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("submited");
    //     document.body.style.backgroundColor = color;
    // }

    let backgroundColor = color !== "#000000" ? {backgroundColor: color } : {};

    return (
        <div id="pick-color-container" style={backgroundColor}>

            {color ===  "#000000" ?
                <div>
                <p>Pick a color:</p>
                <input type="color" id="pick-color" name="picked-color" value={color} onChange={handleColor}/>
                {/* <input type="submit"></input> */}
                </div> : 
                <div className="mystery-color"><h1>You picked {color}</h1></div>}
        </div>
    )
}


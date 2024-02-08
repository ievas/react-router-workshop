import { Routes, Route, Link } from "react-router-dom"

export default function Navbar() {

    return (
        <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/random">Random Color</Link>
        <Link to="/pick">Pick a Color</Link>
        </div>
    )
}



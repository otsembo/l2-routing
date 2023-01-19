import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div className="topNavBar">
            <Link className="active" to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user/malcom@gmail.com">About</Link>
            <Link to="/user/marvin">MARVIN</Link>
        </div>
    )

}
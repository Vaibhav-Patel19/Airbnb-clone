import logo from '../images/airbnb.png'
import React from 'react'
import '../style.css'

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src = {logo} alt="Airbnb Logo" />
        </nav>
    )
}
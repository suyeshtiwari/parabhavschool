import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'
export default function Navigation () {
    return (
        <div className="nav">
            <ul>
                <li>
                <Link className="active" to={"/"}>Home</Link>
                </li>
                <li>
                <Link to={'/aboutus'} >About us</Link>
                </li>
                <li>
                <Link to={'/contactus'} >Contact us</Link>
                </li>
            </ul>
        </div>
    )
}
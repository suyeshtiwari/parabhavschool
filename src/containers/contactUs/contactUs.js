import React from 'react'
// import Map from '../../components/map/map'
import './contactUs.css'

export default function ContactUs () {
    return (
        <div className="contactUs">
            <h1> Contact US </h1>
            <div className="contactCard">
                <ul>
                    <li>
                       <span>Address</span>
                       <span> Girish Park Kondapur
                        Near Hi Tech City, R.R. Dist.
                        Hyderabad (500084) - Telangana</span>

                    </li>
                    <li>
                        <span>Phone: </span>
                        <span> 9003149995</span>
                    </li>
                    <li>
                        <span>Email: </span>
                        <span> Mail@school.com</span>
                    </li>
                </ul>
            </div>
            <div className="locationMap">
                {/* <Map /> */}
            </div>
        </div>
    )
}
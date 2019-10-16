import React from 'react'
import './header.css'

function Header (){
    return (
        <div className="header">
            <div className="logoImg"><img src={require("./Logo.jpg")} alt="LOGO"/></div>
            <div className="logo">The Prabhav International School</div>
        </div>
    )
}

export default Header
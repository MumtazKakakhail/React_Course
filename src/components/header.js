import React from "react";
import "./Header.css"
import Logo from "./images/bg.png";

function header(){
    return (
        <div className="header">
            <div className="logo-txt">
            <img src={Logo} alt="logo" />
            <h1>My Portfolio</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default header;
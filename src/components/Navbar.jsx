import React from "react";
import '../style/layout/_Navbar.scss'

export default function Navbar(){

    return(
        <header>
                <div className="nav--container">
                    <ul className="nav--flex">
                        <li className="ff-sans-normal"><a href="">Home</a></li>
                        <li className="ff-sans-normal"><a href="">Stories</a></li>
                        <li className="ff-sans-normal"><a href="">Projects</a></li>
                        <li className="ff-sans-normal"><a href="">Contact</a></li>
                    </ul>
                </div>

        </header>
    )
}


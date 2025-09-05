import React from "react";
import "../Header/style.css"; 

import {Link} from "react-router-dom"; 

function Header(props) {
    return (
        <nav>
        <ul class="main-nav">
            {
                props.nav.map(elemento => <li> <Link to= {elemento.path}> {elemento.nombre} </Link> </li>)
            }
        </ul>

        <ul class="logo">
            <li> <img src="./img/LOGO.jpg" alt="logo" /></li>
        </ul>
    </nav>
    )
}

export default Header
    

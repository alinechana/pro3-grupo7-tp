import React from "react";
import "../Header/style.css";

import Formulario from "../Formulario/Formulario"

import { Link } from "react-router-dom";


function Header(props) {
    return (
        <nav className="nav">
            <ul className="main-nav">

                <li className="logo"> <img src="./img/LOGO.jpg" alt="logo" /></li>

                <li >  <Link className="ul-text" to="/home"> Home </Link> </li>

                <li >  <Link className="ul-text" to="/populares"> Populares </Link> </li>

                <li >  <Link className="ul-text" to="/cartel"> En Cartel </Link> </li>

                <li >  <Link className="ul-text" to="/favoritos"> Favoritos </Link> </li>

                <li>    <Formulario /> </li>



            </ul>


         

        </nav>
    )
}

export default Header


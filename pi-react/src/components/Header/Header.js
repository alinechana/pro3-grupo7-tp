import React from "react";
import "../Header/style.css";

import Formulario from "../Formulario/Formulario"

import { Link } from "react-router-dom";


function Header(props) {
    return (
        <nav>
            <ul class="main-nav">

                <li>  <Link to="/home"> Home </Link> </li>

                <li>  <Link to="/populares"> Populares </Link> </li>

                <li>  <Link to="/cartel"> En Cartel </Link> </li>

                <li>  <Link to="/favoritos"> Favoritos </Link> </li>

            </ul>

            <ul class="logo">
                <li> <img src="./img/LOGO.jpg" alt="logo" /></li>
            </ul>

            <Formulario />

        </nav>
    )
}

export default Header


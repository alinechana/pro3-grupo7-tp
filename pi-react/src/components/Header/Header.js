import React from "react";
import "../Header/style.css";

import Formulario from "../Formulario/Formulario"

import { Link } from "react-router-dom";


function Header(props) {
    return (

    
        <nav className="nav">

            <h1 className="titleDigital"> Digital Movies</h1>
            <ul className="main-nav">

                <li className="logo"> <img class="logo" src="/img/logo.jpg" /></li>

                <li >  <Link className="ul-text" to="/"> Home </Link> </li>

                <li >  <Link className="ul-text" to="/populares"> Populares </Link> </li>

                <li >  <Link className="ul-text" to="/cartel"> En Cartel </Link> </li>

                <li >  <Link className="ul-text" to="/favoritos"> Favoritos </Link> </li>

                <li>    <Formulario /> </li>



            </ul>


         

        </nav>
    )
}

export default Header


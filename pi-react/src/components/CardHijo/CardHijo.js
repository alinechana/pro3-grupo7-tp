import React, {Component} from "react";
import "../CardHijo/style.css"


function CardHijo (props){
    
    return (

        <section className="card-container">
            <img className="card-img"
                src={`https://image.tmdb.org/t/p/w500${props.pelicula.poster_path}`} />
            <h3 className="card-title">{props.pelicula.title}</h3>
            <p className="card-description">{props.pelicula.overview}</p>

        </section>
    )
}


export default CardHijo
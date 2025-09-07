import React, {Component} from "react";
import { Link } from 'react-router-dom';
import CardPadre from "../CardPadre/CardPadre";

function CardHijo(props) {
   return(
       <article className='cardHijo'>
           <img src={this.props.image} alt="" />
           <h2> {this.props.name}</h2> 
           <p> {this.props.status}</p> 
           <p> {this.props.species}</p> 
           <Link
               to={this.props.rick
                   ? `/detallerick/${this.props.id}`
                   : `/detalle/${this.props.id}`
               }
           >
               <p className='more'>Ver más</p>
           </Link>

           <section className='extra'>
               <p>Origen: </p>
           </section>
           <p className='delete'>Borrar</p>

       </article>
   )
}


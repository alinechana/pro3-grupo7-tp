import React, {Component} from "react";
import { Link } from 'react-router-dom';
import CardHijo from "../CardHijo/CardHijo";
import "../CardPadre/style.css"

class CardPadre extends Component {
    constructor (props){
        super(props)
    
       
      }
    
    
    render() {
        return (
            <React.Fragment>
                <h2> {this.props.title}</h2>
                <div className="contenedor-cards">
                    {this.props.peliculas.map((pelicula, i) => (
                        <CardHijo key={i} pelicula={pelicula} />
                    ))}
                </div>
                <Link to={this.props.ruta}>Ver más</Link>
            </React.Fragment>


        )
    }

  }
export default CardPadre
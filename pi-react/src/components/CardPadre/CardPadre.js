import React, {Component} from "react";
import { Link } from 'react-router-dom';

class CardPadre extends Component {
    constructor (props){
        super(props)
    
       
      }
    
    
      render(){
        return (
            <React.Fragment>
                <h2> {this.props.title}</h2>
                {this.props.peliculas.map((pelicula) => <p> Peli</p>)}
                <Link to = {this.props.ruta}> </Link>

            </React.Fragment>
            
    
        )
      }
  
  }
export default CardPadre
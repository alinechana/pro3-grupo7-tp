import React, {Component} from "react";
import { Link } from 'react-router-dom';
import CardHijo from "../CardHijo/CardHijo";
import "../CardPadre/style.css"

class CardPadre extends Component {
    constructor (props){
        super(props)

        this.state ={
            verDescripcion : false,
            textoBoton: "Ver descripción"
          }
       
      }
    
      cambiar = () => {
        this.setState({
            verDescripcion: !this.state.verDescripcion,
            textoBoton: this.state.verDescripcion ? "Ver descripción" : "Ver menos"
        });
    
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="title"> {this.props.title}</h2>
                <div className="contenedor-cards">
                    {this.props.peliculas.map((pelicula, i) => (
                        <CardHijo 
                            key={i} 
                            pelicula={pelicula} 
                            verDescripcion={this.state.verDescripcion}
                        />
                    ))}
                </div>

                <div className="verMas"> 
 
                {this.props.mostrarVerMas && (
                    <Link to={this.props.ruta}>Ver más</Link>  // si es true, renderiza el ver mas (screen home)
                                                            // si es false, no lo renderiza ( screen populares y en cartel)
                )}
                </div>
            </React.Fragment>


        )
    }

  }
export default CardPadre
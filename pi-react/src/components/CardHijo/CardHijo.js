import React, {Component} from "react";
import "../CardHijo/style.css"


class CardHijo extends Component {
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
            <section className="card-container">
                <img
                    className="card-img"
                    src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`}
                    alt={this.props.pelicula.title}
                />
                <h3 className="card-title">{this.props.pelicula.title}</h3>

                {this.state.verDescripcion && ( //si verdescripcion es true, muestra la descripcion
                    <p className="card-description">{this.props.pelicula.overview}</p>
                )}

                <button className="b-description" onClick={this.cambiar}>{this.state.textoBoton}</button>
            </section>


        )
    }

  }
export default CardHijo


import React, {Component} from "react";
import "../CardHijo/style.css"
import {Link} from 'react-router-dom'; 


class CardHijo extends Component {
    constructor (props){
        super(props)

        this.state ={
            verDescripcion : false,
            textoBoton: "Ver descripción",
            esFavorito: false
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

           <div className="title"> 
           <Link to={`/detalle/${this.props.pelicula.id}`} > 
                <h3 className="card-title">{this.props.pelicula.title}</h3>
        
                </Link>
           </div>
               

                <div className="div-description"> 

                 {this.state.verDescripcion && ( //si verdescripcion es true, muestra la descripcion
                    <p className="card-description">{this.props.pelicula.overview}</p>
                )}

                <button className="b-description" onClick={this.cambiar}>{this.state.textoBoton}</button> </div>

                

                

                
            </section>


        )
    }

  }
export default CardHijo


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

      componentDidMount() {



        let favoritosLocalStorage = localStorage.getItem("favoritos")
        let favoritosParse = JSON.parse(favoritosLocalStorage)

        console.log(favoritosLocalStorage, favoritosParse)

        if (favoritosParse !== null) {

    
            if (favoritosParse.includes(this.props.pelicula.id)) {
                this.setState({
                    esFavorito: true
                })

            }
        }

    }

    cambiar = () => {
        this.setState({
        verDescripcion: !this.state.verDescripcion,
        textoBoton: this.state.verDescripcion ? "Ver descripción" : "Ver menos"
        })
      }

    agregarFavoritos = (id) => {

        let favoritos = []
        let favoritosLocalStorage = localStorage.getItem("favoritos")
        let favoritosParse = JSON.parse(favoritosLocalStorage)

        if (favoritosParse != null) {
            favoritosParse.push(id)
            let favoritosToString = JSON.stringify(favoritosParse)
            localStorage.setItem("favoritos", favoritosToString)
            this.setState({
                esFavorito: true
            })

        } else {
            favoritos.push(id)
            let favoritosToString = JSON.stringify(favoritos)
            localStorage.setItem('favoritos', favoritosToString)
            this.setState({
                esFavorito: true
            })

        }

    }

    quitarFavoritos = (id) => {
        console.log(id);
        
        let favoritosLocalStorage = localStorage.getItem("favoritos")
        let favoritosParse = JSON.parse(favoritosLocalStorage)



        let filtrados = favoritosParse.filter((idFav) =>
            idFav != id)

        let favoritosToString = JSON.stringify(filtrados)
        localStorage.setItem('favoritos', favoritosToString)
        this.setState({
            esFavorito: false
        })

        if(this.props.quitarFavoritos){
            this.props.quitarFavoritos(this.props.id)
        }


    }


    render() {
        return (
            <section className="card-container">
                <article class="single-card-movie">
                    <img
                        className="card-img"
                        src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`}
                        alt={this.props.pelicula.title}
                    />
                    <div class="cardBody">
                        
                            <Link to={`/detalle/${this.props.pelicula.id}`} >
                                <h3 className="card-title">{this.props.pelicula.title}</h3>

                            </Link>
                      


                      

                            {this.state.verDescripcion && ( //si verdescripcion es true, muestra la descripcion
                                <p className="card-description">{this.props.pelicula.overview}</p>
                            )}

                            <button className="b-description" onClick={this.cambiar}>{this.state.textoBoton}</button> 
                  

                            {this.state.esFavorito ?

                            <button className="b-favoritos" onClick={() => this.quitarFavoritos(this.props.pelicula.id)} > Borrar de Favoritos</button> :

                            <button className="b-favoritos" onClick={() => this.agregarFavoritos(this.props.pelicula.id)} > Agregar a Favoritos</button>


}



                    </div>




                </article>




            </section>


        )
    }
}
  
export default CardHijo


import React, { Component } from "react";
import Populares from "../Populares/Populares";
import Cartel from "../Cartel/Cartel";
import CardPadre from "../../components/CardPadre/CardPadre";
import "../Detalle/style.css"

class Detalle extends Component {
    constructor() {
        super()
        this.state = {
            pelicula: [],
            estaCargando: true
        }
    }
    

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?&api_key=85b07e442aa3edd3ac9d0648eef992c3`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({ pelicula: data, estaCargando: false })


            )
            .catch(err => console.error(err));


        let favoritosLocalStorage = localStorage.getItem("favoritos")
        let favoritosParse = JSON.parse(favoritosLocalStorage)

        console.log(favoritosLocalStorage, favoritosParse)

        if (favoritosParse !== null) {

            
            console.log(this.props.match.params.id)
            const idANumero = +this.props.match.params.id
            if (favoritosParse.includes(idANumero)) {
                this.setState({
                    esFavorito: true
                })

            }
        }

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

        let favoritosLocalStorage = localStorage.getItem("favoritos")
        let favoritosParse = JSON.parse(favoritosLocalStorage)

        favoritosParse.filter((idFav) =>
            idFav != id
        )
        let favoritosToString = JSON.stringify(favoritosParse)
        localStorage.setItem('favoritos', favoritosToString)
        this.setState({
            esFavorito: false
        })


    }

    render() {
        return (
            <React.Fragment>

                {this.state.estaCargando ?

                    <p> Cargando....</p>

                    : <section className="card-container-detalle">
                        <img
                            className="card-img" src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`}
                            alt={this.state.pelicula.title} />

                        <div className="cardBody">

                            <h3 className="card-title-detalle"> {this.state.pelicula.title}</h3>
                            <p className="card-description-detalle"> {this.state.pelicula.overview}</p>
                            <p className="card-release" ><strong>Fecha de estreno:</strong> {this.state.pelicula.release_date}</p>
                            <p className="card-duration"><strong>Duración:</strong> {this.state.pelicula.runtime} min</p>
                            <p className="card-rating" ><strong>Puntuación:</strong> {this.state.pelicula.vote_average}</p>
                            <p className="card-genre" ><strong>Genero:</strong> {this.state.pelicula.genres.map(g => g.name).join(", ")}</p>

                            {this.state.esFavorito ?

                                <button className="b-favoritos" onClick={() => this.quitarFavoritos(this.state.pelicula.id)} > Borrar de Favoritos</button> :

                                <button className="b-favoritos" onClick={() => this.agregarFavoritos(this.state.pelicula.id)} > Agregar a Favoritos</button>


                            }
                        </div>

                    </section>


                }

            </React.Fragment>
        )

    }
}



export default Detalle

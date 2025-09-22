
import React, { Component } from "react";


class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            peliculas: [],
            estaCargando: true
        }
    }


    componentDidMount() {
        let favoritosLocalStorage = localStorage.getItem("favoritos")
        let favoritosParse = JSON.parse(favoritosLocalStorage)

        console.log(favoritosLocalStorage, favoritosParse)

        if (favoritosParse !== null) {

            let pelis = []

            favoritosParse.map((id) =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=85b07e442aa3edd3ac9d0648eef992c3`)
                    .then((res) => res.json())
                    .then((data) => {
                        pelis.push(data)
                        this.setState({ peliculas: pelis, estaCargando: false })
                    })
                    .catch((error) => console.log(error))

            )

        }

    }

    render() {
        console.log(this.state.peliculas);

        return (

            <React.Fragment>

                {this.state.estaCargando ?

                    <p> Cargando....</p>

                    :

                    <div className="contenedor-cards">
                        {this.state.peliculas.map((pelicula) => (
                            <section className="card-container">
                                <img
                                    className="card-img" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                                    alt={pelicula.title} />

                                <h3 className="card-title"> {pelicula.title}</h3>
                                <p className="card-description"> {pelicula.overview}</p>
                                <p className="card-release" id="release-date"><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                                <p className="card-duration"><strong>Duración:</strong> {pelicula.runtime} min</p>
                                <p className="card-rating" id="votes"><strong>Puntuación:</strong> {pelicula.vote_average}</p>
                                <p className="card-genre" ><strong>Genero:</strong> {pelicula.genres.map(g => g.name).join(", ")}</p>
                                

                                <button className="b-favoritos" onClick={() => this.quitarFavoritos(this.state.pelicula.id)} > Borrar de Favoritos</button> 

                    


                                

                            </section>

                        ))}
                    </div>




                }

            </React.Fragment>)

    }
}



export default Favoritos 
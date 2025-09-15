import React, { Component } from "react";
import Populares from "../Populares/Populares";
import Cartel from "../Cartel/Cartel";
import CardPadre from "../../components/CardPadre/CardPadre";

class Detalle extends Component {
    constructor() {
        super()
        this.state = {
            pelicula: [],
            estaCargando: true
        }
    }



    componentDidMount(props) {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?&api_key=85b07e442aa3edd3ac9d0648eef992c3`)
            .then((res) => res.json())
            .then((data) => this.setState({ pelicula: data.results, estaCargando: false }))
            .catch(err => console.error(err));

    }
    render() {
        return (
            <React.Fragment>

                {this.state.estaCargando ?

                    <p> Cargando....</p>

                    : <section className="card-container">
                        <img
                            className="card-img" src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`}
                            alt={this.state.pelicula.title} />

                        <h3 className="card-title"> {this.state.pelicula.title}</h3>
                        <p className="card-description"> {this.state.pelicula.overview}</p>
                        <p className="card-release" id="release-date"><strong>Fecha de estreno:</strong> {this.state.pelicula.release_date}</p>
                        <p className="card-duration"><strong>Duración:</strong> {this.state.pelicula.run_time}</p>
                        <p className="card-rating" id="votes"><strong>Puntuación:</strong> {this.state.pelicula.popularity}</p>
                        <p className="card-genre" ><strong>Genero:</strong> {this.state.pelicula.genres.name}</p>

                    </section>


                }

            </React.Fragment>
        )

    }
}



export default Detalle

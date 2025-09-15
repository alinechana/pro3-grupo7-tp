
import React, { Component } from "react";


class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            peliculas: [],
            estaCargando: true
        }
    }
   

    componentDidMount(props) {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=85b07e442aa3edd3ac9d0648eef992c3`)
            .then(res => res.json())
            .then((data) => this.setState({ peliculas: data.results, estaCargando: false }))
            .catch(err => console.error(err));
        }


        render() {
            return ( 
            
            <React.Fragment>

                {this.state.estaCargando ?

                    <p> Cargando....</p>

                    : 
                    
                        <div className="contenedor-cards">
                            {this.state.peliculas.map((pelicula, i) => (
                                <section className="card-container">
                                <img
                                    className="card-img" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                                    alt={pelicula.title} />
        
                                <h3 className="card-title"> {pelicula.title}</h3>
                                <p className="card-description"> {pelicula.overview}</p>
                                <p className="card-release" id="release-date"><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                                <p className="card-duration"><strong>Duración:</strong> {pelicula.run_time}</p>
                                <p className="card-rating" id="votes"><strong>Puntuación:</strong> {pelicula.popularity}</p>
                                <p className="card-genre" ><strong>Genero:</strong> {pelicula.genres_id}</p>
        
                            </section>
        
                            ))}
                    </div>
               
                    
    

                }

            </React.Fragment>)

        }
    }

export default Favoritos 
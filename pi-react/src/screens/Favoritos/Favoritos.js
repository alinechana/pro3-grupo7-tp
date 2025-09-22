
import React, { Component } from "react";
import CardHijo from "../../components/CardHijo/CardHijo";


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

    quitarFavoritos(id){
        let filtrados = this.state.peliculas.filter((ch) => ch.id !== id)
        this.setState({
            peliculas: filtrados
        })
    }

    render() {
        console.log(this.state.peliculas);

        return (

            <React.Fragment>

                {this.state.estaCargando ?

                    <p> Cargando....</p>

                    :

                    <div className="contenedor-cards">
                        {this.state.peliculas.map((ch) => (
                            <CardHijo pelicula = {ch}
                                quitarFavoritos = {() => this.quitarFavoritos(ch.id)}
                            />
                                



                        ))}
                    </div>




                }

            </React.Fragment>)

    }
}



export default Favoritos 
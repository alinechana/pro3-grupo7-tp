import React, { Component } from "react";
import CardPadre from "../../components/CardPadre/CardPadre"


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            populares: [],
            cartel: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=85b07e442aa3edd3ac9d0648eef992c3')
        .then(res => res.json())
        .then((data) => {
          const resultadosFiltrados = data.results.filter((pelis, index) => index < 4);
      
          this.setState({
            populares: resultadosFiltrados,
            numeroDePagina: this.state.numeroDePagina + 1
          });
        })
        .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=85b07e442aa3edd3ac9d0648eef992c3')
        .then(res => res.json())
        .then((data) => {
          const resultadosFiltrados = data.results.filter((pelis, index) => index < 4);
      
          this.setState({
            cartel: resultadosFiltrados,
            numeroDePagina: this.state.numeroDePagina + 1
          });
        })
        .catch(err => console.error(err));

    }

    

    render() {
        return (
            <React.Fragment>

                

                <CardPadre
                    title="Peliculas populares"
                    ruta="/populares"
                    peliculas={this.state.populares}
                    mostrarVerMas={true}

                />

                <CardPadre
                    title="Peliculas en cartel"
                    ruta="/cartel"
                    peliculas={this.state.cartel}
                    mostrarVerMas={true}

                />

            </React.Fragment>

        )
    }

}

export default Home







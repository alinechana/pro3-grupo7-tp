import React, { Component } from "react";
import CardPadre from "../../components/CardPadre/CardPadre"


class Cartel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            populares: [],
            cartel: [],
            numeroDePagina: 1
            
        }
    }

    componentDidMount() {
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

    cargarPaginaSiguiente(){
        console.log("Quiero pag siguiente");
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.numeroDePagina}&api_key=85b07e442aa3edd3ac9d0648eef992c3`)
        .then((response) => response.json())
        .then((data) => 
          this.setState({
            cartel: this.state.cartel.concat(data.results),
            contador: this.state.numeroDePagina + 1
          })
        )
        .catch((error) => console.log(error))
        
      }

    render() {
        return (
            <React.Fragment>

                

                {this.state.cartel.length > 0 ?

                    <CardPadre
                        title="Peliculas en cartel"
                        ruta="/cartel"
                        peliculas={this.state.cartel}
                        mostrarVerMas={false}

                    />
                 

                    : <p> Cargando ...</p>

                }

                <button onClick={() => this.cargarPaginaSiguiente()}> Cargar mas... </button>

            </React.Fragment>

        )
    }

}

export default Cartel
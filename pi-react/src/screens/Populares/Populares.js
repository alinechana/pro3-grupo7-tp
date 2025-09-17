import React, { Component } from "react";
import CardPadre from "../../components/CardPadre/CardPadre"
import "../Populares/style.css"


class Populares extends Component {
    constructor(props) {
        super(props)

        this.state = {
            populares: [],
            cartel: [],
            numeroDePagina: 1
            
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=85b07e442aa3edd3ac9d0648eef992c3')
        .then(res => res.json())
        .then((data) => {
            this.setState({
              populares: data.results,
              numeroDePagina: this.state.numeroDePagina + 1
          });
        })
        .catch(err => console.error(err));


    }

    cargarPaginaSiguiente(){
        console.log("Quiero pag siguiente");
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.numeroDePagina}&api_key=85b07e442aa3edd3ac9d0648eef992c3`)
        .then((response) => response.json())
        .then((data) => 
          this.setState({
            populares: this.state.populares.concat(data.results),
            contador: this.state.numeroDePagina + 1
          })
        )
        .catch((error) => console.log(error))
        
      }

    render() {
        return (
            <React.Fragment>

                

                {this.state.populares.length > 0 ?

                    <CardPadre
                        title="Peliculas populares"
                        ruta="/populares"
                        peliculas={this.state.populares}
                        mostrarVerMas={false}

                    />

                    : <p> Cargando ...</p>

                }

                <button className="button-cargar" onClick={() => this.cargarPaginaSiguiente()}> Cargar mas... </button>

            </React.Fragment>

        )
    }

}

export default Populares
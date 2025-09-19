import React, { Component } from "react";
import CardPadre from "../../components/CardPadre/CardPadre"
import "../Cartel/style.css"
import Formulario from "../../components/Formulario/Formulario"

class Cartel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            populares: [],
            cartel: [],
            numeroDePagina: 1,
            estaCargando: true,
            buscado: false
            
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=85b07e442aa3edd3ac9d0648eef992c3')
        .then(res => res.json())
        .then((data) => {
          
      
          this.setState({
            cartel: data.results,
              numeroDePagina: this.state.numeroDePagina + 1,
              estaCargando: false,
                buscado: true,
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

            <Formulario> </Formulario>

                

                {this.state.cartel.length > 0 ?

                    <CardPadre
                        title="Peliculas en cartel"
                        ruta="/cartel"
                        peliculas={this.state.cartel}
                        mostrarVerMas={false}

                    />
                 

                    : <p> Cargando ...</p>

                }

                <button className="button-cargar" onClick={() => this.cargarPaginaSiguiente()}> Cargar mas... </button>

            </React.Fragment>

        )
    }

}

export default Cartel
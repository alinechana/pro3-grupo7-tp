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
            busqueda: "" //guarda lo que escribe el usuario
            
            
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

  actualizarBusqueda = (evento) => {
    this.setState({
      busqueda: evento.target.value
    })
  }

    render() {

      const peliculasFiltradas = this.state.cartel.filter(pelicula =>
        pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase())
      );
      
        return (
            <React.Fragment>
                <form className="form-busqueda">
                    <input className="input-busqueda"
                        type="text"
                        placeholder="Buscar película..."
                        value={this.state.busqueda}
                        onChange={this.actualizarBusqueda}
                    />
                </form>
            

                

                {this.state.cartel.length > 0 ?

                    <CardPadre
                        title="Peliculas en cartel"
                        ruta="/cartel"
                        peliculas={peliculasFiltradas}
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
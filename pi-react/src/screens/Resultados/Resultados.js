import React, { Component } from "react";
import Formulario from "../../components/Formulario/Formulario"

class Resultados extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query='star'&api_key=api_key=85b07e442aa3edd3ac9d0648eef992c3`)
            .then(res => res.json())
            .then((data) => {})
            .catch(err => console.error(err));
        }


        render() {
            return <h2> Resultados de busqueda</h2>
        }
    }

export default Resultados 
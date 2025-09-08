import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class Formulario extends Component {
    constructor(props){
        super(props)


        this.state = {
            busqueda: ""
        }
    }

    prevenirDefault (evento) {
        evento.preventDefault()
        this.props.history.push("/resultados/" + this.state.busqueda)
    }

    controlarCambios (evento) {
        this.setState({
            busqueda: evento.target.value
        })
    }
}

export default withRouter (Formulario)
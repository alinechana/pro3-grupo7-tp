import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "../Formulario/style.css"

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
    render() {
        return (<form className="form" onSubmit={(event) => this.prevenirDefault(event)}>
            <input className="formCuadro" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.busqueda}
            />
            <button className="button" type="submit"> Buscar </button>
        </form>)
}
}

export default withRouter (Formulario)
import React, { Component } from "react";
import CardHijo from "../../components/CardHijo/CardHijo";

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            peliculas: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=85b07e442aa3edd3ac9d0648eef992c3')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));

    }


    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=85b07e442aa3edd3ac9d0648eef992c3')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));

    }



}

export default Home







import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Switch, Route } from 'react-router-dom';

import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas"
import Series from "./screens/Series/Series";
import Resultados from "./screens/Resultados/Resultados";
import FavoritosPeliculas from "./screens/FavoritosPeliculas/FavoritosPeliculas";
import FavoritosSeries from "./screens/FavoritosSeries/FavoritosSeries";
import DetallePeliculas from "./screens/DetallePeliculas/DetallePeliculas";
import DetalleSeries from "./screens/DetalleSeries/DetalleSeries";


import logo from './logo.svg';
import './App.css';

function App() {

  let lista = [
    {
      nombre: "Home",
      path: "/"
    },

    {
      nombre: "Favoritos",
      path: "/favoritos"
    },

    {
      nombre: "Ver todas: Populares",
      path: "/populares"
    },

    {
      nombre: "Ver todas: En cartel",
      path: "/cartel"
    },
  ];


  return (
    <React.Fragment>

      <Header nav={lista} />

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/favoritos" component={About} />
        <Route path="/detalle:id" component={Detalle} />
        <Route path="/detalleSeries" component={DetalleSeries} />
        <Route path="/detallePeliculas" component={DetallePeliculas} />

      </Switch>

      <footer>
        <Footer />
      </footer>



    </React.Fragment>

  );
}

export default App;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//  </p>
//  <a
//    className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//     rel="noopener noreferrer"
//  >
//     Learn React
//   </a>
//  </header>
//  </div>  
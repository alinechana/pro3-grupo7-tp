import React from "react";

import Header from "./components/Header"; 
import Footer from "./components/Footer"; 

import {Route, Switch} from 'react-router-dom'

import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas"; 
import Series from "./screens/Series"; 
import Resultados from "./screens/Resultados"; 
import FavoritosPeliculas from "./screens/FavoritosPeliculas"; 
import FavoritosSeries from "./screens/FavoritosSeries"; 
import DetallePeliculas from "./screens/DetallePeliculas"; 
import DetalleSeries from "./screens/DetalleSeries"; 


import logo from './logo.svg';
import './App.css';

function App() {

  let lista = [
    {nombre: "Home", 
      path: "/"}, 

    {nombre: "Favoritos", 
      path: ""}, 

    {nombre: "Ver todas: Populares", 
      path: ""}, 

    {nombre: "Ver todas: En cartel",
      path: ""
    }, 
      ];


  return (
    <React.Fragment> 

<Switch>
      <Route path="/" component= {Home} exact= {true} />
      <Route path="/about" component= {About}  /> 
      <Route path="/personajes" component= {Personajes}  /> 
      <Route path ="/detalle:id" component = {Detalle} />
      <Route path="/RickandMorty" component= {RickApi}  />
      <Route path="/DetalleRick" component = {DetalleRick} />

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
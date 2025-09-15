import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import Home from "./screens/Home/Home";
import Populares from "./screens/Populares/Populares";
import Cartel from "./screens/Cartel/Cartel";
import Resultados from "./screens/Resultados/Resultados";
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";

import Error from "./screens/Error/Error"; 


import './App.css';

function App() {

  return (
    <React.Fragment>

      <Header/>
     

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/populares" component={Populares} />
        <Route path="/cartel" component={Cartel} />
        <Route path="/resultados" component={Resultados}/>
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        
        <Route component={Error} /> 

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
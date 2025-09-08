import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Switch, Route } from 'react-router-dom';

import Home from "./screens/Home/Home";
import Populares from "./screens/Populares/Populares"
import Cartel from "./screens/Cartel/Cartel"


import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <React.Fragment>

      <Header/>

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/populares" component={Populares} />
        <Route path="/cartel" component={Cartel} />

        

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
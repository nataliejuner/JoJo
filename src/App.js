import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './home'
import Madlib from './madlib'
import { Route } from 'react-router-dom';
import Magicball from './magic_ball'
import Gallery from './gallery'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Route exact={true} path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/madlib" component={Madlib} />
      <Route path='/magic8ball' component={Magicball} />

      </div>
    );
  }
}

export default App;

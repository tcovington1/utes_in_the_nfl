import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/home';
import PlayerForm from './pages/PlayerForm'

class App extends Component {
  render() {
  return (

  <>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/playerform' component={PlayerForm} />
  </Switch>
  </>

  );
  }
}

export default App;

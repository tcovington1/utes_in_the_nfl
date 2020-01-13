import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/home';

class App extends Component {
  render() {
  return (

  <>
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
  </>

  );
  }
}

export default App;

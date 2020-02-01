import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/home';
import ShowPlayer from './components/player-show/ShowPlayer';
import PlayerForm from './pages/PlayerForm';
import NoMatch from './pages/NoMatch';
import Header from './components/Header';
// import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
  return (

  <>
  <Header />
  {/* <Container> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/playerform' component={PlayerForm} />
      <Route exact path='/api/players/:id' component={ShowPlayer} />
      <Route component={NoMatch} />
    </Switch>
  {/* </Container> */}
  </>

  );
  }
}

export default App;

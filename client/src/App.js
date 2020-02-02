import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/home';
import ShowPlayer from './components/player-show/ShowPlayer';
import PlayerForm from './pages/PlayerForm';
import NoMatch from './pages/NoMatch';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import NavBar from './components/NavBar';
// import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
  return (

  <>
  <NavBar />
  {/* <Container> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/playerform' component={PlayerForm} />
      <Route exact path='/api/players/:id' component={ShowPlayer} />
      {/* Auth Routes */}
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />

      <Route component={NoMatch} />
    </Switch>
  {/* </Container> */}
  </>

  );
  }
}

export default App;

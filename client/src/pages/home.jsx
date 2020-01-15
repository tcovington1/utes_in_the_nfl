import React, { Component } from 'react'
import { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import Header from '../components/Header';
import PlayerForm from './PlayerForm';

class Home extends Component {
  state = { players: [] }

  componentDidMount() {
    axios.get('/api/players')
    .then( res => {
      this.setState({ players: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addPlayer = (player) => {
    axios.post('/api/players', {player})
    .then( res => {
      const { players } = this.state;
      this.setState({ players: [ ...players, res.data ] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    const { players } = this.state
    return(
      <>
      <Header />
        <PlayerList playerData={players}/>
        <PlayerForm add={this.addPlayer}/>
  
      </>
    )
  }
};

export default Home;
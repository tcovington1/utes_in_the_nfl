import React, { Component } from 'react'
import { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import Header from '../components/Header';

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
  render() {
    const { players } = this.state
    return(
      <>
      <Header />
        <PlayerList playerData={players}/>
  
      </>
    )
  }
};

export default Home;
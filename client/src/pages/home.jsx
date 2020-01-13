import React, { Component } from 'react'
import { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import PlayerList from '../components/PlayerList';

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
        <PlayerList playerData={players}/>
      </>
    )
  }
};

export default Home;
import React, { Component } from 'react'
import { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import Header from '../components/Header';
import PlayerForm from './PlayerForm';
import { Button } from '../components/Styles';

class Home extends Component {
  state = { players: [], isAddingPlayer: false }

  componentDidMount() {
    axios.get('/api/players')
    .then( res => {
      this.setState({ players: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addPlayer = (player) => {     //player below is the param for the controller
    axios.post('/api/players', {player})
    .then( res => {   //we just upadated in the back-end, now we need to update the front-end state
      const { players } = this.state;            //res.data is the added item
      this.setState({ players: [ ...players, res.data ] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  updatePlayer = (id, player) => {
    axios.put(`/api/players/${id}`, {player})
    .then(res => {   //we just upadated in the back-end, now we need to update the front-end state
      const players = this.state.players.map( p => {
        if (p.id == id) // as we are mapping, if the id matches the id we are updating, this is the one we want to update
          return res.data
        return p
      })
                     //this is players: players but ES6 is smart enough to know 
      this.setState({ players })
    })
    .catch( err => {
      console.log(err)
    })
  }

  deletePlayer = (id) => {
    axios.delete(`/api/players/${id}`)
    .then( res => {
      const {players} = this.state;
      this.setState({ players: players.filter( p => p.id !== id )})
    })
    .catch( err => {
      console.log(err)
    })
  }

  editToggle = () => this.setState(!this.state.isAddingPlayer);


  render() {
    const { players, isAddingPlayer } = this.state
    return(
      <>
      <Header />
        <PlayerList playerData={players} update={this.updatePlayer} rm={this.deletePlayer} />
      <Button onClick={this.editToggle}>Add Player</Button>

      {
        isAddingPlayer ? 
        <PlayerForm add={this.addPlayer} />
        :
        <div></div>
      }
      </>
    )
  }
};

export default Home;
import React, { Component } from 'react'
import axios from 'axios'

import { Button } from '../Styles'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import Pic from '../../assets/s_lot.jpeg'
import './ShowPlayer.scss'

class ShowPlayer extends Component {
  state = { player: {} }

  componentDidMount() {
     const { id } = this.props.match.params;
    // const { match } = this.props
     axios.get(`/api/players/${id}`)
     .then(res => {
       this.setState({ player: res.data})
     })
   }

  render () {
    const { full_name, age, starter, position, team, DOB, bio } = this.state.player
    return(
      <>
      <Container>
        <div className="player-show-heading">
          <h1>{full_name}</h1>
        </div>
        <div className="player-show-cont">
          <div className="player-pic">
            <img src={Pic}/>
          </div>
          <div className="player-info">
            <h4>Age: {age}</h4>
            <h4>DOB: {DOB}</h4>
            <h4>Starter: { starter ? "Yes" : "No"} </h4>
            <h4>Position: {position} </h4>
            <h4>Current team: {team}</h4>
            <h4>Bio: {bio}</h4>

          </div>
        </div>
          <Button><Link to='/' className='link'>Back</Link></Button>
        
      {/* {this.state.player.full_name} */}
      </Container>
      </>
    )
  }
}

export default ShowPlayer;

// t.string "full_name"
// t.integer "age"
// t.boolean "starter"
// t.string "position"
// t.string "team"
// t.date "DOB"
// t.text "bio"
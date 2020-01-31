import React, { Component } from 'react'
import axios from 'axios'
import { Button } from './Styles'
import { Link } from 'react-router-dom'

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
    return(
      <>
      <h1>This is the player show page</h1>
      {this.state.player.full_name}
      <Button><Link to='/' className='link'>Back</Link></Button>
      </>
    )
  }
}

export default ShowPlayer;
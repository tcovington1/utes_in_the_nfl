import React, { Component } from 'react'
import {axios} from 'axios'

class ShowPlayer extends Component {
  state = { player: {} }

  componentDidMount() {
    //  const { id } = this.props.match.params;
     axios.get(`/api/players/${id}`)
     .then(res => {
       this.setState({ player: res.data})
     })
   }

  render () {
    return(
      <>
      {this.state.full_name}
      </>
    )
  }
}

export default ShowPlayer;
import React from 'react'
import Player from './Player';

import DataRow from '../components/dataRow'

const PlayerList = ({ playerData }) => (
  <div>
      <DataRow style={{backgroundColor: 'red'}}>
        <h2>Position</h2>
        <h2>Name</h2>
        <h2>Team</h2>
      </DataRow>
    {
      playerData.map( player => 
        <Player key={player.id} {...player} />
      )
    }
  </div>
);

export default PlayerList;
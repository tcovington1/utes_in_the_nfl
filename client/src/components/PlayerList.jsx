import React from 'react'
import Player from './Player';

const PlayerList = ({ playerData }) => (
  <div>
    {
      playerData.map( player => 
        <Player key={player.id} {...player} />
      )
    }
  </div>
);

export default PlayerList;
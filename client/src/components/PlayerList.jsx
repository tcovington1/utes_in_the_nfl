import React from 'react'
import styled from 'styled-components';
import Player from './Player';


import DataRow from '../components/dataRow'

const TableHeader = styled.div`
  width: 70%;
  height: 3em;
  display: flex;
  justify-content: space-around;
  margin: 2em 0em 2em 5em;
  background-color: #CC0000;
`;



const PlayerList = ({ playerData, update, rm }) => (

  <div>
      <TableHeader>
        <h2>Position</h2>
        <h2>Name</h2>
        <h2>Team</h2>
      </TableHeader>
    {
      playerData.map( player => 
        <Player 
        key={player.id} 
        {...player} 
        update={update}
        rm={rm}
        />
        // 
      )
    }
  </div>
  );

export default PlayerList;
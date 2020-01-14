import React from 'react'
import styled from 'styled-components';
import DataRow from './dataRow';

const TableItem = styled.div`

`;

const Player = ({full_name, team, position }) => (
  <>
  <DataRow>
    <h3>{position}</h3>
    <h3>{full_name}</h3>
    <h3>{team}</h3>
  </DataRow>
  </>
);

export default Player;
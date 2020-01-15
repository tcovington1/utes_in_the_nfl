import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DataRow from './dataRow';

const StyledLink = styled.a`
  text-decoration: none;
`;

const Player = ({full_name, team, position }) => (
  <>
    <StyledLink>
      <DataRow>
      <h3>{position}</h3>
      <h3>{full_name}</h3>
      <h3>{team}</h3>
      </DataRow>
    </StyledLink>
  </>
);

export default Player;
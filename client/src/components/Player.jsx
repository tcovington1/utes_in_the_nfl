import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DataRow from './dataRow';
import PlayerForm from '../pages/PlayerForm';
import { Button } from './Styles'

const StyledLink = styled.a`
  text-decoration: none;
`;

const Player = ({full_name, team, position, update, rm, id, ...player }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editToggle = () => setIsEditing(!isEditing);
 
  return(
  <>
    {/* <StyledLink> */}
      <DataRow>
      <h3>{position}</h3>
      <h3>{full_name}</h3>
      <h3>{team}</h3>
      <Button onClick={editToggle}>Edit</Button>
      <Button onClick={() => rm(id)}>Delete</Button>
    {/* {
      editToggle ? (<PlayerForm />) : (<div></div>)
    } */}
      </DataRow>
      {
        isEditing ? 
        <PlayerForm id={id}  {...player} update={update} toggleEdit={editToggle}/>
        :
        <div></div>
      }

    {/* </StyledLink> */}
  </>
)};

export default Player;
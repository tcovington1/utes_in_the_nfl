import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DataRow from './dataRow';
import PlayerForm from '../pages/PlayerForm';
import { Button } from './Styles'

const StyledLink = styled.a`
  text-decoration: none;
`;

const Player = ({selectPlayer, full_name, age, team, position, playoff_wins, update, rm, id, bio, dob, ...player }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editToggle = () => setIsEditing(!isEditing);
 
  return(
  <>
    {/* <StyledLink> */}
    <Link to={{ pathname: `/api/players/${id}`}}>
      <DataRow >
>
      <h3>{position}</h3>
      <h3>{full_name}</h3>
      <h3>{team}</h3>
      <h3>{playoff_wins}</h3>

      <Button onClick={editToggle}>Edit</Button>
      <Button onClick={() => rm(id)}>Delete</Button>
    {/* {
      editToggle ? (<PlayerForm />) : (<div></div>)
    } */}
      </DataRow>
      </Link>  
      {
        isEditing ? 
        <PlayerForm 
          id={id} 
          fullName={full_name}
          age={age}
          dob={dob}
          team={team}
          postion={position}
          playoffWins={playoff_wins}
          update={update}
          bio={bio}
          toggleEdit={editToggle}/>
        :
        <div></div>
      }
      {/* fullName={full_name} */}
    {/* </StyledLink> */}
  </>
)};

export default Player;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlayerForm from '../../pages/PlayerForm';
import { Button, StyledCard, SubHead } from '../Styles'
import Pic from '../../assets/s_lot.jpeg'
import './Player.scss'
import '../global.scss'
import Bounce from 'react-reveal/Bounce';


const StyledLink = styled.a`
  text-decoration: none;
`;

const Player = ({selectPlayer, full_name, age, team, position, playoff_wins, update, rm, id, bio, dob, ...player }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editToggle = () => setIsEditing(!isEditing);
 
  return(
  <>
        <Bounce bottom cascade>

    {/* <Link to= className='player-link'> */}
        <StyledCard >
          <div className="player-image">
            <img src={Pic} alt="" className='pic'/>
          </div>
    <Link to={`/api/players/${id}`} className='player-link'>
          <div className="player-details">
            <SubHead>{position}</SubHead>
            <SubHead>{full_name}</SubHead>
            <SubHead>{team}</SubHead>
            {/* <SubHead>{playoff_wins}</SubHead> */}
          </div>
          </Link>  
          {/* {
            editToggle ? (<PlayerForm />) : (<div></div>)
          } */}
          <div className="player-card-btn-div">
            <Button onClick={editToggle}>Edit</Button>
            <Button onClick={() => rm(id)}>Delete</Button>
          </div>
        </StyledCard>
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
    </Bounce>
  </>
)};

export default Player;
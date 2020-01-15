import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 1em;
`;

const StyledInput = styled.input`
  height: 2em;
  margin: .5em;
`;

const StyledButton = styled.button`
  width: 10em;
  padding: 1em;
  background-color: #BEEB9F;
  color: white;
  border-radius: 15%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

`;

class PlayerForm extends Component {
  state = { full_name: '', age: 0, starter: false, position: '', team: '', bio: '', DOB: 0 } 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state)
    this.setState({ full_name: '', age: 0, starter: false, position: '', team: '', bio: '', DOB: 0 })
  }

  render() {
    const { full_name, age, starter, position, team, bio, DOB } = this.state
    return (
      <StyledForm onSubmit={this.handleSubmit}> 
        <StyledInput type="text"
          placeholder='Full Name'
          label='full_name'
          name='full_name'
          value={full_name}
          onChange={this.handleChange}
        
        />
        <StyledInput type="number"
          placeholder='Age'
          label='age'
          name='age'
          value={age}
          onChange={this.handleChange}
        
        />
        <StyledInput type="date"
          // placeholder='D'
          label='DOB'
          name='DOB'
          value={DOB}
          onChange={this.handleChange}
        
        />
        <label>Starter? 
          <StyledInput type="checkbox"
            placeholder='Starter?'
            label='starter'
            name='starter'
            // checked={starter}
            value={starter}
            onChange={this.handleChange}
          
          />
        </label>
        <StyledInput type="text"
          placeholder='Position'
          label='position'
          name='position'
          value={position}
          onChange={this.handleChange}
        
        />
        <StyledInput type="text"
          placeholder='Team'
          label='team'
          name='team'
          value={team}
          onChange={this.handleChange}
        
        />
        <StyledInput type="text"
          placeholder='Bio'
          label='bio'
          name='bio'
          value={bio}
          onChange={this.handleChange}
        
        />
        <StyledButton type='submit'>Submit</StyledButton>
      </StyledForm>
    )
  }
}

export default PlayerForm;
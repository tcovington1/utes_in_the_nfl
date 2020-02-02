import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0px 3px 10px rgba(25,17,34,0.05);
  padding: .75em 1em;
  margin-bottom: .5em;

  &:hover {
    transform: translateY(-3px)
  }
`;

export const StyledCard = styled.div`
  width: 75%;
  height: 20em;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  margin: 2em 4em;
  border-radius: 10px 10px 10px 10px;
`;

export const SubHead = styled.h4`
  font-family: 'Raleway', sans-serif;
`;
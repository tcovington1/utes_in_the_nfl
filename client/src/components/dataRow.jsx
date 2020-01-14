import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  width: 70%;
  height: 3em;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  margin: 2em 0em 2em 5em;
`;

const DataRow = ({children}) => (
  <>
    
    <StyledRow>
      {children}
    </StyledRow>
  </>
)

export default DataRow;

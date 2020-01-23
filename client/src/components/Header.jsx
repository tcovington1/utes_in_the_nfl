import React from 'react'
import styled from 'styled-components';

import Logo from './Logo';

const HeaderContainer = styled.div`
 margin: 0;
  width: 100%;
  height: 5em;
  background-color: #374140;
`;

const Header = () => (
  <>
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  </>
)

export default Header;
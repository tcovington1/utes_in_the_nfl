import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutContainer = styled.div`
  width: 80%;
  padding-top: 10em;
  height: 100%;
`;

const Layout = ({children}) => {
  return(
  <>
    <Header />
    <LayoutContainer>
      {children}
    </LayoutContainer>
  </>
  )

};

export default Layout;
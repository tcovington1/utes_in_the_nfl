import React from 'react'
import styled from 'styled-components'

const Layout = ({children}) => {
  <>
    <Container>
      {props.children}
    </Container>
  </>

};

export default Layout;
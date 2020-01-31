import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Logo = () => (
  <h1 style={{color: 'white', paddingTop: '.60em', display: 'flex', justifyContent: 'center'}}>
    <Link to='/' style={{color: 'white', textDecoration: 'none',}}>
      Utes In The NFL
    </Link>
  </h1>
)

export default Logo;
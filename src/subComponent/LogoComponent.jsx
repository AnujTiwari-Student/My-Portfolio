import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media (max-width: 420px) {
    font-size: 1.5rem;
    top: 2.2rem;
  }
`;  

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
        AT
    </Logo>
  )
}

export default LogoComponent

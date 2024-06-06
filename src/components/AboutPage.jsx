import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";
import LogoComponent from "../subComponent/LogoComponent";
import SocialIcons from "../subComponent/SocialIcons";
import PowerButton from "../subComponent/PowerButton";
import ParticleComponent from "../subComponent/ParticleComponent";
import astronaut from '../assets/Images/spaceman.png'
import BigTitle from "../subComponent/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

`;

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`


const SpaceMan = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 100%;
  height: auto;

}
`

const Main = styled.div`
border 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;

@media (max-width: 768px) {
    width: 58vw; 
    height: auto;
    position: relative; 
    top: 30%; 
    left: 17%;
    padding: 1rem;
    font-size: calc(0.7rem + 1vw);
    color: ${(props) => props.theme.text};
    border 2px solid ${(props) => props.theme.text};
  }
`;



const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <ParticleComponent theme="dark" />
        <SpaceMan>
          <img src={astronaut} alt="" />
        </SpaceMan>
        <Main>
          I'm a web developer and react-native devloper located in India. I love
          to create simple yet beautiful websites and mobile applications with
          great user experience.
          <br /> <br />
          I'm interested in MERN stack and android devlopment and like trying
          new things and building great projects. I'm an independent freelancer.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;

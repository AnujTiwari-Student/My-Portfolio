import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width: 768px){
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
};


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

@media (max-width: 768px) {
    margin-top: 8rem;
    width: 50vw;
    height: max-content;
  }

  @media (min-width: 768px) and (max-width: 1024px){
    font-size: calc(1rem + 1vw);
    width: 30vw;
    height: 65vh;
  };
  
  @media (min-width: 1280px){
    font-size: calc(0.3rem + 0.5vw);
  };
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}

@media (max-width: 768px) {
    font-size: calc(0.7em + 1vw);
    padding-bottom: 1rem;
  }
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: calc(0.7em + 1vw);
    }
}
ul,p{
    margin-left: 2rem;
    @media (max-width: 768px) {
      font-size: calc(0.6em + 1vw);
    }
}
@media (max-width: 768px) {
      font-size: calc(0.6em + 1vw);
    }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
        <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> React-Native Devloper
          </Title>
          <Description>
            I love to create cross platform mobile applications and Keep it
            clean, minimal and simple.
          </Description>
          <Description>
            <strong>I like to Create</strong>
            <ul>
              <li>Clean UI</li>
              <li>Mobile Applications</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Android Studio</li>
              <li>Expo</li>
              <li>VScode</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> MERN Stack Devloper
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Tailwind, Firebase, Node, Express,
              MongoDB, SAAS etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode , Eclipse , Github , Git , Vite etc.</p>
          </Description>
        </Main>
            <BigTitle text="SKILLS" top="80%" right="30%" />
        </Box>
        </ThemeProvider>
        
    )
}

export default MySkillsPage

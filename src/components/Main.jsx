import React, { useState } from 'react'
import styled , {keyframes} from 'styled-components'
import PowerButton from '../subComponent/PowerButton'
import LogoComponent from '../subComponent/LogoComponent'
import SocialIcons from '../subComponent/SocialIcons'
import { Link } from 'react-router-dom'
import { YinYang } from './AllSvg'
import Intro from './Intro'
import { motion } from 'framer-motion'


const MainContainer = styled.div`

background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position:relative;
h2,h3,h4,h5,h6{
    font-family: 'Karla' sans-serif;
    font-weight:500;
}
`
const Container = styled.div`
padding: 2rem;
`

const Contacts = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
  
  @media (max-width: 480px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
`;

const Work = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 48%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 480px) {
    color: color: ${(props) => (props.click ? "white" : "black")};
  }
`;


const Experience = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 42%;
  left: calc(1rem + 2vw);
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
display: flex;
left:0;
right:0;
flex-direction: row;
width: 100%;
justify-content: space-evenly;

`;

const About = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  z-index: 1;
  text-decoration: none;

  @media (min-width: 768px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    color: ${(props) => props.theme.text};
  }
`;

const Skills = styled(Link)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding-top: 1rem;
    font-size: 1.5rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 420px) {
    bottom: 50%;
    right: 0;
    top: 0;
    height: ${(props) => (props.click ? "50%" : "0%")};
    width: ${(props) => (props.click ? "100%" : "0%")};
  }
`;

const Main = () => { 
  const [click , setClick] = useState(false);

  const handleClick = ()=>{
    setClick(!click);
  }

  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <DarkDiv click={click} />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            height={click ? 120 : 200}
            width={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>
        <Contacts
          href="https://mail.google.com/mail/?view=cm&fs=1&to=anujavengers@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.h2
            click={click}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact me..
          </motion.h2>
        </Contacts>
        <Work to="/work">
          <motion.h2
            click={click}
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Works
          </motion.h2>
        </Work>
        <Experience click={click} to="/experience">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Exp.
          </motion.h2>
        </Experience>
        <BottomBar>
          <About click={click} to="/about">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
}

export default Main

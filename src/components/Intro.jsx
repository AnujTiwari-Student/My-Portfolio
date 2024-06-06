import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to left,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.body} 50%
      )
      top,
    linear-gradient(
        to bottom,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      left,
    linear-gradient(
        to top,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.body} 50%
      )
      right;
  background-repeat: no-repeat;
  // background-size: 100% 2px;
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 60vw;
    height: 55vh;
    justify-content: center;
    background: linear-gradient(
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        bottom,
      linear-gradient(
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${(props) => props.theme.body};
    border-right: 2px solid ${(props) => props.theme.text};
    z-index: 1;
  }
`;

const SubBox = styled.div`
  width: 100%;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px solid red;

  .pic {
    // position: absolute;
    // bottom: 0;
    // left: 50%;
    // transform: translate(-50%, 0%);

    width: 100%;
    height: auto;

    @media only screen and (min-width: 768px) {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 100%;
    }

    @media only screen and (min-width: 600px) {
      position: absolute;
      // bottom: 30%;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    position: relative;
  }

  @media only screen and (min-width: 600px);
   {
    width: 100%;
    // position: relative;
    display: grid;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5em + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Anuj.</h3>
          <h6>I design simple yet responsive and beautiful website.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Image" />
        </motion.div>
      </SubBox>
    </Box>
  );
}

export default Intro

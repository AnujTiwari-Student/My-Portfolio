import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import LogoComponent from "../subComponent/LogoComponent";
import SocialIcons from "../subComponent/SocialIcons";
import PowerButton from "../subComponent/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponent/Card";
import { useRef } from "react";
import { useEffect } from "react";
import { YinYang } from "./AllSvg";
import BigTitle from "../subComponent/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  @media (max-width: 768px) {
    top: 25%;
    left: 20%;
    flex-direction: row;
    align-items: center;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {

  hidden:{
    opacity:0
  },
  show:{opacity:1 , 
    transition:{
      staggerChildren:0.5,
      duration: 0.5,
    }
  },
}

const WorkPage = () => {

  const ref = useRef(null);
  const spin = useRef(null);

  useEffect(()=>{
    let element = ref.current;


    const rotate = ()=>{

      element.style.transform = `translateX(${-window.scrollY}px)`
      spin.current.style.transform = `rotate(${-window.scrollY}deg)`;

    }

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  },[])

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <Main ref={ref} variants={container} initial='hidden' animate="show">
          {
            Work.map(d =>{
              return <Card key={d.id} data={d} />
            })
          }
        </Main>
        <Rotate ref={spin}>
          <YinYang width={80} height={80} fill={darkTheme.text}></YinYang>
        </Rotate>
        <BigTitle text='WORK' top='10%' right='20%' />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;

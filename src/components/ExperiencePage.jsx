import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import {experience} from '../data/ExperienceData'
import { motion } from 'framer-motion';
import ExperienceComponent from './ExperienceComponent';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from '../subComponents/BigTitle';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.7)`};
  width: 100%;
  height: 100%;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ExperiencePage = () => {

  const [numbers , setNumbers] = useState(0);

  useEffect(()=>{
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
  },[])

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {experience.map((experience) => {
              return (
                <ExperienceComponent
                  key={experience.id}
                  experience={experience}
                />
              );
            })}
          </Grid>
        </Center>
        <BigTitle text="Experience" top="8%" left="10%" />
      </Container>
    </MainContainer>
  );
}

export default ExperiencePage;

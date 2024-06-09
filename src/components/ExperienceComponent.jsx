import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Container = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    height: 14rem;
    padding: 0.8rem;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Container}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Container}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
  @media (min-width: 320px) and (max-width: 420px) {
    font-size: calc(0.6em + 1vw);
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: calc(0.6em + 1vw);
  }
`;
const Tags = styled.span`
padding-right: 0.5rem;
`
const Date = styled.span`
  padding: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: calc(0.6em + 1vw);
  }
`;

const Box = styled(motion.div)``;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ExperienceComponent = ({experience: {name , tags , imgSrc , date , link} , experience}) => {
  return (
    <Box variants={Item}>
      <Container target="_blank" rel="noopener noreferrer" href={link}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tags key={id}>#{t}</Tags>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Container>
    </Box>
  );
}

export default ExperienceComponent

import React from 'react'
import styled from 'styled-components'
import { Github } from '../components/AllSvg';
import { motion } from 'framer-motion';


const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 12rem;
    height: 35vh;
    padding:1.5rem;
    margin-right: 4rem;
  }
`;

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla' , san-serif;
  fon-weight: 500;

`;

const HashTags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tags = styled.span`
  margin-right: 1rem;
  // padding-top: 0.5rem;
  font-size: calc(0.8rem + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.div`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    &>* {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden:{
    scale: 0,
  },
  show:{
    scale: 1,
    transition:{
      type:"spring",
      duration: 0.5,
    }
  }
}

const Card = ({
  data: { name, id, description, tags, github, demo },
  data,
}) => {
  return (
    <Box key={id} variants={Item} >
      <Title>{name}</Title>
      <Description>{description}</Description>
      <HashTags>
        {tags.map((t, id) => {
          return <Tags key={id}>#{t}</Tags>;
        })}
      </HashTags>
      <Footer>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          Visit
        </Link>
        <Git>
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;

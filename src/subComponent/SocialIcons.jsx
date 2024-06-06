import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "../components/AllSvg";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 3px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};

  @media (min-width: 320px) and (max-width: 480px) {
    background-color: ${(props) => props.theme.text};
  }
`;



const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          href="https://github.com/AnujTiwari-Student"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          href="https://www.linkedin.com/in/anuj-kumar-tiwari-770a84238/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            // theme={props.theme}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          href="https://x.com/AnujTiwari2402"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            // theme={props.theme}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          href="https://www.instagram.com/__anuj_tiwari__/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            // theme={props.theme}
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;

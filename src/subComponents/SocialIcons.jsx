import { Github, Instagram, Linkedin, Twitter } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
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

  @media (max-width: 768px) {
    left: 1rem;
    & > * {
      fill: ${props => props.click ? props.theme.text : props.theme.text};
    }
  }
`;

const Line = styled(motion.span)`
  width: 3px;
  height: 8rem;
  background-color: ${(props) =>
  props.color === "dark" ? DarkTheme.text : DarkTheme.body};

    @media (max-width: 768px) {
    background-color: ${props => props.theme.text};
  }
`;

const SocialIconWrapper = styled.div`
  fill: ${props => props.theme === 'dark' ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 768px) {
    fill: ${props => props.theme === 'dark' ? DarkTheme.text : DarkTheme.body};
  }
`;

const SocialIcons = (props) => {
  const { click , theme } = props;
  return (
    <Icons theme={theme} click={click}>
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
          <SocialIconWrapper theme={theme}>
            <Github
              width={25}
              height={25}
            />
            </SocialIconWrapper>
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
          <SocialIconWrapper theme={theme}>
            <Linkedin
              width={25}
              height={25}
            />
          </SocialIconWrapper>
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
          <SocialIconWrapper theme={theme}>
            <Twitter
              width={25}
              height={25}
            />
          </SocialIconWrapper>
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          href="https://www.instagram.com/__anuj_tiwari__/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <SocialIconWrapper theme={theme}>
            <Instagram
              width={25}
              height={25}
            />
          </SocialIconWrapper>
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

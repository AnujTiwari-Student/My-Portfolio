import React from "react";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = (props) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticleComponent;

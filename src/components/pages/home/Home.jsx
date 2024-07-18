import { useRef, useEffect, useState, useCallback } from "react";

import { Box, Paper, Slide, Typography } from "@mui/material";

import Typed from "typed.js";

import MainBackground from "../../../assets/images/backgrounds/homeBackground.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

import { particlesOptions } from "../../../constants/particles.options";

const Home = () => {
  const [init, setInit] = useState(false);
  const [slide, setSlide] = useState(false);
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "> Js Developer",
    "> UI Designer",
    "> React Programmer",
    "> Front-End Developer",
  ];
  const particlesLoaded = async (container) => {
    console.log(container);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    })
      .then(() => {
        setInit(true);
      })
      .then(() => {
        setTimeout(() => {
          setSlide(true);
        }, 1000);
      });

    const typedName = new Typed(nameEl.current, {
      strings: [' > "Amirreza Monfared" '],
      typeSpeed: 50,
      startDelay: 2000,
      backSpeed: 60,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings,
      startDelay: 3700,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typedName.destroy();
      typedInfo.destroy();
      setSlide(false);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          background: `url(${MainBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          filter: "contrast(100%)",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          pt: 2,
        }}
      >
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesOptions}
          />
        )}

        <Slide in={slide}>
          <Paper
            elevation={1}
            sx={{
              width: 400,
              height: 150,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "start",
              bgcolor: "background.galssy",
              backdropFilter: "blur(10px)",
              mr: 2,
            }}
          >
            <Typography
              variant="h5"
              ref={nameEl}
              sx={{ color: "red.main", p: 1 }}
            >
              [ Amirreza Mofared ]
            </Typography>
            <Typography
              variant="body2"
              ref={infoEl}
              sx={{ color: "green.main", p: 1 }}
            >
              Web Deveolper
            </Typography>
          </Paper>
        </Slide>
      </Box>
    </>
  );
};
export default Home;

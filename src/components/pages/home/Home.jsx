// React
import { useEffect, useState, Suspense, useRef } from "react";
// MUI
import { Box, ListItemButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Particles
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particlesOptions } from "../../../constants/particles.options";
import { loadFull } from "tsparticles";

// Utils
import MainBackground from "../../../assets/images/backgrounds/homeBackground.png";
import Loading from "../../utils/Loading";

// Components
import FileExplorer from "../../utils/FileExplorer";
import TypeCodeContainer from "./TypeCodeContainer";
import ExploreItem from "./ExploreItem";
import Typed from "typed.js";

// SVG
import { CssSVG, JsSVG, ReactSVG } from "../../../assets/svgIcons";
import CustomListItem from "../../utils/CustomListItem";
// SX Objects
//
//
//
const boxSx1 = {
  background: `url(${MainBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  height: 1,
};

const grindSx1 = {
  display: "flex",
  justifyContent: "start",
  gap: 40,
  alignItems: "start",
  width: 1,
  height: 1,
};
const gridSx2 = {
  width: 300,
  height: 1,
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  alignItems: "start",
  bgcolor: "background.main",
};
const gridSx3 = {
  width: 400,
  height: 1,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
};
const boxSx2 = {
  width: 1,
  height: 350,
  bgcolor: "background.main",
  borderRadius: 5,
  overflow: "hidden",
};

//
//
//

const Home = () => {
  const stringIntro = {
    firstLine: ["Amirreza"],
    secondLine: ["Js Developer", "React Programmer"],
    thiredLine: [],
  };
  const stringHabit = {
    firstLine: ["Movie", "Anime", "Books"],
    secondLine: ["Gym", "Vollyball"],
    thiredLine: ["Learning"],
  };
  const stringNothing = {
    firstLine: ["Nothing"],
    secondLine: ["This is Nothing", "This is Too!"],
    thiredLine: ["And This"],
  };
  const firstLineEl = useRef(null);
  const secondLineEl = useRef(null);
  const thiredLineEl = useRef(null);
  const [init, setInit] = useState(false);
  const [slide, setSlide] = useState(false);
  const [currentStrings, setCurrentStrings] = useState({
    firstLine: ["Amirreza"],
    secondLine: ["Js Developer", "React Programmer"],
    thiredLine: [''],
  });
  const particlesLoaded = async (container) => {
    console.log(container);
  };
  useEffect(() => {
    try {
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

      return () => {
        setSlide(false);
      };
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    try {
      const typedFirstLine = new Typed(firstLineEl.current, {
        strings: currentStrings.firstLine,
        typeSpeed: 50,
        startDelay: 2000,
        backSpeed: 60,
        showCursor: false,
      });
      const typedSecondLine = new Typed(secondLineEl.current, {
        strings: currentStrings.secondLine,
        startDelay: 3700,
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
        showCursor: false,
      });
      const typedThiredLine = new Typed(thiredLineEl.current, {
        strings: currentStrings.thiredLine,
        startDelay: 3700,
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
        showCursor: false,
      });

      return () => {
        setSlide(false);
        typedFirstLine.destroy();
        typedSecondLine.destroy();
        typedThiredLine.destroy();
      };
    } catch (err) {
      console.log(err.message);
    }
  }, [currentStrings]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Box sx={boxSx1}>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={particlesOptions}
            />
          )}

          <Grid container sx={grindSx1}>
            <Grid item sx={gridSx2}>
              <Box sx={{ width: 1 }}>
                <FileExplorer>
                  <ListItemButton
                    sx={{ bgcolor: "background.main" }}
                    onClick={() => setCurrentStrings(stringIntro)}
                  >
                    <ExploreItem
                      title="Introduction"
                      icon={<ReactSVG width={20} height={20} />}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ bgcolor: "background.main" }}
                    onClick={() => setCurrentStrings(stringHabit)}
                  >
                    <ExploreItem
                      title="Habits"
                      icon={<JsSVG width={20} height={20} />}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ bgcolor: "background.main" }}
                    onClick={() => setCurrentStrings(stringNothing)}
                  >
                    <ExploreItem
                      title="Noting"
                      icon={<CssSVG width={20} height={20} />}
                      onClick={() => {
                        setCurrentStrings();
                      }}
                    />
                  </ListItemButton>
                </FileExplorer>
              </Box>
            </Grid>
            <Grid item sx={gridSx3}>
              <Box sx={boxSx2}>
                <TypeCodeContainer>
                  <CustomListItem color="red.main" count={1}>
                    <Typography ref={firstLineEl}>
                      [ Amirreza Mofared ]
                    </Typography>
                  </CustomListItem>
                  <CustomListItem color="green.main" count={2}>
                    <Typography ref={secondLineEl}>Web Deveolper</Typography>
                  </CustomListItem>
                  <CustomListItem color="pink.main" count={3}>
                    <Typography ref={thiredLineEl}></Typography>
                  </CustomListItem>
                </TypeCodeContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Suspense>
    </>
  );
};
export default Home;

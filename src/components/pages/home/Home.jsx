// React
import { useEffect, Suspense, useRef, useContext } from "react";
// MUI
import { Box, Drawer, Grow, ListItemButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MainBackground from "../../../assets/images/backgrounds/homeBackground.png";

// Utils
import Loading from "../../utils/Loading";

// Components
import {
  FileExplorer,
  TypeCodeContainer,
  ExploreItem,
  ParticlesContainer,
  ExploreActionButton,
} from ".";
// SVG
import { CssSVG, JsSVG, ReactSVG } from "../../../assets/svgIcons";
import CustomListItem from "../../utils/CustomListItem";
// Datas
import { stringHabit, stringIntro, stringNothing } from "./data/typedData";

// Lib
import Typed from "typed.js";
import {
  firstLineTypedObject,
  secondLineTypedObject,
  thiredLineTypedObject,
} from "./data/typedObjectValuesData";
import Context from "../../../context/context";

const Home = () => {
  const {
    exploreOpen,
    onExploreToggler,
    codeContainerOpen,
    onCodeContainerToggler,
    fileName,
    setFileName,
    currentStrings,
    setCurrentStrings,
  } = useContext(Context);
  const firstLineEl = useRef(null);
  const secondLineEl = useRef(null);
  const thiredLineEl = useRef(null);
  useEffect(() => {
    if (!currentStrings) {
      setCurrentStrings(stringIntro);
    }
    try {
      const typedFirstLine = new Typed(firstLineEl.current, {
        strings: currentStrings.firstLine,
        ...firstLineTypedObject,
      });
      const typedSecondLine = new Typed(secondLineEl.current, {
        strings: currentStrings.secondLine,
        ...secondLineTypedObject,
      });
      const typedThiredLine = new Typed(thiredLineEl.current, {
        ...thiredLineTypedObject,
        strings: currentStrings.thiredLine,
      });

      return () => {
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
        <Box
          sx={{
            background: `url(${MainBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            height: 1,
          }}
        >
          <ParticlesContainer />
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 1,
              height: 1,
            }}
          >
            <ExploreActionButton onExploreHandler={onExploreToggler} />
            <Drawer
              variant="persistent"
              open={exploreOpen}
              onClose={onExploreToggler}
              anchor="right"
            >
              <Box sx={{ width: 1, height: 1 }}>
                <FileExplorer onExploreHandler={onExploreToggler}>
                  <ListItemButton
                    onClick={(e) => {
                      setCurrentStrings(stringIntro);
                      setFileName("Introduction.jsx");
                      onExploreToggler(e);
                      !codeContainerOpen && onCodeContainerToggler();
                    }}
                  >
                    <ExploreItem
                      title="Introduction"
                      icon={<ReactSVG width={20} height={20} />}
                    />
                  </ListItemButton>
                  <ListItemButton
                    onClick={(e) => {
                      setCurrentStrings(stringHabit);
                      setFileName("Habits.js");
                      onCodeContainerToggler();
                      onExploreToggler(e);
                    }}
                  >
                    <ExploreItem
                      title="Habits"
                      icon={<JsSVG width={20} height={20} />}
                    />
                  </ListItemButton>
                  <ListItemButton
                    onClick={(e) => {
                      setCurrentStrings(stringNothing);
                      setFileName("Nothing.css");
                      onCodeContainerToggler();
                      onExploreToggler(e);
                    }}
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
            </Drawer>
            <Box
              sx={{
                width: 350,
                height: 1,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TypeCodeContainer
                fileName={fileName}
                codeContainerOpen={codeContainerOpen}
                onCodeContainerHandler={onCodeContainerToggler}
              >
                <CustomListItem color="red.main" count={1}>
                  <Typography ref={firstLineEl}></Typography>
                </CustomListItem>
                <CustomListItem color="green.main" count={2}>
                  <Typography ref={secondLineEl}></Typography>
                </CustomListItem>
                <CustomListItem color="pink.main" count={3}>
                  <Typography ref={thiredLineEl}></Typography>
                </CustomListItem>
              </TypeCodeContainer>
            </Box>
          </Grid>
        </Box>
      </Suspense>
    </>
  );
};
export default Home;

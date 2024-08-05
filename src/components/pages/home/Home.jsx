// React
import { useEffect, useState, Suspense, useRef } from "react";
// MUI
import { Box, Drawer, ListItemButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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
import { boxSx1, grindSx1, codeContainerSx } from "./data/sxData";

// Lib
import Typed from "typed.js";
import {
  firstLineTypedObject,
  secondLineTypedObject,
  thiredLineTypedObject,
} from "./data/typedObjectValuesData";

const Home = () => {
  const firstLineEl = useRef(null);
  const secondLineEl = useRef(null);
  const thiredLineEl = useRef(null);

  const [exploreOpen, setExploreOpen] = useState(true);
  const [codeContainerOpen, setCodeContainerOpen] = useState(false);
  const [fileName, setFileName] = useState("Introduction");
  const [currentStrings, setCurrentStrings] = useState(stringIntro);

  const onExploreHandler = (e) => {
    e.stopPropagation();
    setExploreOpen(!exploreOpen);
  };
  const onCodeContainerHandler = () => {
    setCodeContainerOpen(!codeContainerOpen);
    console.log(codeContainerOpen);
  };

  useEffect(() => {
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
        <Box sx={boxSx1}>
          <ParticlesContainer />
          <Grid sx={grindSx1}>
            <ExploreActionButton onExploreHandler={onExploreHandler} />
            <Drawer
              variant="persistent"
              open={exploreOpen}
              onClose={onExploreHandler}
              anchor="right"
            >
              <Box sx={{ width: 1, height: 1 }}>
                <FileExplorer onExploreHandler={onExploreHandler}>
                  <ListItemButton
                    sx={{ bgcolor: "background.main" }}
                    onClick={() => {
                      setCurrentStrings(stringIntro);
                      setFileName("Introduction.jsx");
                      setCodeContainerOpen(true);
                    }}
                  >
                    <ExploreItem
                      title="Introduction"
                      icon={<ReactSVG width={20} height={20} />}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ bgcolor: "background.main" }}
                    onClick={() => {
                      setCurrentStrings(stringHabit);
                      setFileName("Habits.js");
                      setCodeContainerOpen(true);
                    }}
                  >
                    <ExploreItem
                      title="Habits"
                      icon={<JsSVG width={20} height={20} />}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ bgcolor: "background.main" }}
                    onClick={() => {
                      setCurrentStrings(stringNothing);
                      setFileName("Nothing.css");
                      setCodeContainerOpen(true);
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
            <Box sx={codeContainerSx}>
              <Box
                sx={{
                  display: codeContainerOpen ? "block" : "none",
                  width: 350,
                  height: 350,
                  bgcolor: "background.main",
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >
                <TypeCodeContainer
                  fileName={fileName}
                  codeContainerOpen={codeContainerOpen}
                  onCodeContainerHandler={onCodeContainerHandler}
                >
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
            </Box>
          </Grid>
        </Box>
      </Suspense>
    </>
  );
};
export default Home;

import { useState } from "react";
import { Helmet } from "react-helmet-async";

import MainLayout from "./components/base/MainLayout";
import { PageContainer } from "./components/pages";
import MainContext from "./context/context";
import { SidebarViewManager } from "./components/sidebar";
import { createTheme, useMediaQuery } from "@mui/material";

const App = () => {
  const [themeMode, setThemeMode] = useState(false);
  const theme = createTheme({
    direction: "rtl",
    palette: {
      mode: themeMode ? "light" : "dark",
      background: {
        main: "#282A36",
      },
      currentLine: {
        main: "#5c607a",
      },
      foreground: {
        main: "#F8F8F2",
      },
      comment: {
        main: "#373a42",
      },

      darkPurple: {
        main: "#2e026b",
      },
      cyan: {
        main: "#8BE9FD",
      },
      green: {
        main: "#50FA7B",
      },
      orange: {
        main: "#FFB86C",
      },
      pink: {
        main: "#FF79C6",
      },
      purple: {
        main: "#BD93F9",
      },
      red: {
        main: "#FF5555",
      },
      yellow: {
        main: "#F1FA8C",
      },
    },
    components: {
      MuiButtonBase: {},
      MuiTab: {
        styleOverrides: {
          root: {
            "&.MuiTab-root": {
              minHeight: 55,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#FF79C6",
          },
        },
      },
    },
    typography: {
      fontFamily: "Vazir, tahoma ,roboto",
    },
  });
  const [init, setInit] = useState(false);
  const [slide, setSlide] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const [expanded, setExpanded] = useState(true);
  const [exploreOpen, setExploreOpen] = useState(true);
  const [codeContainerOpen, setCodeContainerOpen] = useState(false);
  const [fileName, setFileName] = useState("Introduction");
  const [currentStrings, setCurrentStrings] = useState("");
  const [progress, setProgress] = useState(0);
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const onExploreToggler = (e) => {
    e.stopPropagation();
    setExploreOpen(!exploreOpen);
  };
  const onCodeContainerToggler = (str) => {
    if (!codeContainerOpen) {
      setCodeContainerOpen(!codeContainerOpen);
    } else if (str === "close") {
      setCodeContainerOpen(!codeContainerOpen);
    }
  };
  const onExpendedToggler = (e) => {
    setExpanded(!expanded);
  };

  const onPageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };
  const onDrawerToggler = () => {
    setSideBarOpen(!sideBarOpen);
  };
  const onDialogToggler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <MainContext.Provider
      value={{
        init,
        setInit,
        slide,
        setSlide,
        pageNumber,
        onPageNumber,
        sideBarOpen,
        onDrawerToggler,
        openDialog,
        onDialogToggler,
        expanded,
        onExpendedToggler,
        exploreOpen,
        onExploreToggler,
        codeContainerOpen,
        onCodeContainerToggler,
        dialogData,
        setDialogData,
        fileName,
        setFileName,
        currentStrings,
        setCurrentStrings,
        progress,
        setProgress,
        themeMode,
        setThemeMode,
        isDownMd,
        isUpLg,
        isXs,
        theme,
      }}
    >
      <MainLayout>
        <Helmet>
          <title>امیررضا منفرد</title>
        </Helmet>
        <SidebarViewManager />
        <PageContainer />
      </MainLayout>
    </MainContext.Provider>
  );
};

export default App;

import { useContext } from "react";
import context from "../../../context/context";
import { Tabs, Tab } from "@mui/material";
import { tabsData } from "../helpers/tabsData.sidebar";

const Navbar = () => {
  const { pageNumber, onPageNumber, onDrawerToggler, themeMode } =
    useContext(context);
  const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={onPageNumber}
    >
      {data.map((tab, index) => {
        return (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            onClick={onDrawerToggler}
            sx={{
              color: themeMode ? "background.main" : "purple.main",
              "&.Mui-selected": {
                color: "pink.main",
              },
            }}
            {...tab}
          />
        );
      })}
    </Tabs>
  );
};
export default Navbar;

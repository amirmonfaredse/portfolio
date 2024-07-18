import {
  HomeRounded,
  PersonRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

export const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};
export const tabsData = () => {
  const tabsDataArr = [
    { label: "خانه", icon: <HomeRounded sx={{ mr: 2 }} />, ...tabProps(0) },
    {
      label: "درباره من",
      icon: <PersonRounded sx={{ mr: 2 }} />,
      ...tabProps(1),
    },
    {
      label: "مهارت های من",
      icon: <TextSnippetRounded sx={{ mr: 2 }} />,
      ...tabProps(2),
    },
    {
      label: "پروژه های من",
      icon: <TerminalRounded sx={{ mr: 2 }} />,
      ...tabProps(3),
    },
    {
      label: "من فراتر از کد",
      icon: <MessageRounded sx={{ mr: 2 }} />,
      ...tabProps(4),
    },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded sx={{ mr: 2 }} />,
      ...tabProps(5),
    },
  ];
  return tabsDataArr;
};

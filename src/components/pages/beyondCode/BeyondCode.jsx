import { Box, Button, Grid } from "@mui/material";
import { MenuBook, SignalCellularAlt } from "@mui/icons-material";
import { useState } from "react";
import ModalDialog from "./ModalDialog";
import CustomDivider from "../../utils/CustomDivider";
import CustomAccordion from "./CustomAccordion";
import {
  LearningSVG,
  PlanningSVG,
  SolutionSVG,
  TimeManageSVG,
  TeamWorkSVG,
  PrioritySVG,
} from "../../../assets/svgIcons";
import MBTIChart from "./charts/MBTIChart";
import HollandChart from "./charts/HollandChart";
import BarOnChart from "./charts/BarOnChart";
import NeoChart from "./charts/NeoChart";
import AptitudeChart from "./charts/AptitudeChart";
import { Helmet } from "react-helmet-async";
const gridSx1 = {
  width: {
    sm: 1,
    lg: "60%",
  },
  mx: {
    sm: "none",
    lg: "auto",
  },
  display: "flex",
  justifyContent: "center",
  my: 8,
};
const btnSx1 = {
  width: 140,
  p: 2,
  color: "foreground.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  borderRadius: "50%",
};
const gridSx2 = {
  width: 1,
  my: 8,
  px: 5,
  display: "flex",
  justifyContent: "left",
};
const BeyondCode = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const onClickDialog = () => {
    setOpenDialog(!openDialog);
  };

  const softSkillsData = [
    {
      id: `softSkillsData-${1}`,
      name: "مهارت در یادگیری",
      about: "",
      icon: <LearningSVG />,
    },
    {
      id: `softSkillsData-${2}`,
      name: "برنامه ریزی ",
      about: "",
      icon: <PlanningSVG />,
    },
    {
      id: `softSkillsData-${3}`,
      name: "حل مسئله",
      about: "",
      icon: <SolutionSVG />,
    },
    {
      id: `softSkillsData-${4}`,
      name: "اولویت بندی",
      about: "",
      icon: <PrioritySVG />,
    },
    {
      id: `softSkillsData-${5}`,
      name: "کارگروهی",
      about: "",
      icon: <TeamWorkSVG />,
    },
    {
      id: `softSkillsData-${6}`,
      name: "مدیریت زمان",
      about: "",
      icon: <TimeManageSVG />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>من فراتر از کد</title>
      </Helmet>
      <Grid container>
        <Box sx={{ mt: 2, width: 1 }}>
          <CustomDivider
            icon={<MenuBook color="purple.main" />}
            title="مهارت های نرم"
            bgColor="orange.main"
            color="darkPurple.main"
          />
          <Grid container sx={gridSx1}>
            {softSkillsData.map((data) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={4}
                key={data.id}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  id={data.id}
                  onClick={() => {
                    onClickDialog();
                    setDialogData(data);
                  }}
                  sx={btnSx1}
                >
                  {data.icon || null}
                  {data.name}
                </Button>
              </Grid>
            ))}
          </Grid>
          <ModalDialog
            openDialog={openDialog}
            dialogData={dialogData}
            onClickDialog={onClickDialog}
          />
          <CustomDivider
            icon={<SignalCellularAlt color="darkPurple" />}
            title="تست های شخصیت"
            bgColor="purple.main"
            color="background.main"
          />
          <Grid item sx={gridSx2}>
            <Grid xs={12}>
              <CustomAccordion title="تست هوش هیجانی Bar-On">
                <BarOnChart />
              </CustomAccordion>
              <CustomAccordion title="تست شخصیت شناسی MBTI">
                <MBTIChart />
              </CustomAccordion>
              <CustomAccordion title="تست شخصیت شناسی NEO">
                <NeoChart />
              </CustomAccordion>
              <CustomAccordion title="تست هوش های چندگانه">
                <AptitudeChart />
              </CustomAccordion>
              <CustomAccordion title="تیپ سنجی شغلی Holland">
                <HollandChart />
              </CustomAccordion>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
export default BeyondCode;

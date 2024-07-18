import { Box, Button, Grid } from "@mui/material";
import { MenuBook, SignalCellularAlt } from "@mui/icons-material";
import { PieChart } from "@mui/x-charts/PieChart";
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
import theme from "../../base/theme/theme";
import MBTIChart from "./charts/MBTIChart";

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
      <Grid container>
        <Box sx={{ mt: 2 }}>
          <CustomDivider
            icon={<MenuBook color="purple.main" />}
            title="مهارت های نرم"
            bgColor="orange.main"
            color="darkPurple.main"
          />
          <Grid
            container
            sx={{
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
            }}
          >
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
                  sx={{
                    width: 140,
                    p: 2,
                    color: "foreground.main",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    borderRadius: "50%",
                  }}
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
            icon={<SignalCellularAlt color="pink" />}
            title="تست های شخصیت"
            bgColor="purple.main"
            color="background.main"
          />
          <Grid
            item
            sx={{
              width: 1,
              my: 8,
              px: 5,
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Grid xs={12}>
              <CustomAccordion title="تست هوش هیجانی Bar-On"></CustomAccordion>
              <CustomAccordion title="تست شخصیت شناسی MBTI">
                <MBTIChart/>
              </CustomAccordion>
              <CustomAccordion title="تست شخصیت شناسی NEO">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ipsum explicabo hic rem assumenda odit. Officia, reprehenderit
                doloremque consequatur illo eius sunt aliquid nostrum mollitia
                temporibus, animi earum pariatur sapiente?
              </CustomAccordion>
              <CustomAccordion title="تست هوش های چندگانه">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ipsum explicabo hic rem assumenda odit. Officia, reprehenderit
                doloremque consequatur illo eius sunt aliquid nostrum mollitia
                temporibus, animi earum pariatur sapiente?
              </CustomAccordion>
              <CustomAccordion title="تیپ سنجی شغلی Holland">
                <PieChart
                  width={400}
                  height={200}
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: 43,
                          label: "I",
                          color: theme.palette.red.main,
                        },
                        {
                          id: 1,
                          value: 35,
                          label: "N",
                          color: theme.palette.orange.main,
                        },
                        {
                          id: 2,
                          value: 37,
                          label: "F",
                          color: theme.palette.green.main,
                        },
                        {
                          id: 3,
                          value: 45,
                          label: "P",
                          color: theme.palette.cyan.main,
                        },
                        {
                          id: 4,
                          value: 57,
                          label: "E",
                          color: theme.palette.foreground.main,
                        },
                        {
                          id: 5,
                          value: 65,
                          label: "S",
                          color: theme.palette.purple.main,
                        },
                        {
                          id: 6,
                          value: 63,
                          label: "T",
                          color: theme.palette.pink.main,
                        },
                        {
                          id: 7,
                          value: 55,
                          label: "J",
                          color: theme.palette.yellow.main,
                        },
                      ],
                      innerRadius: 2,
                      paddingAngle: 2,
                      cornerRadius: 10,
                      border: 0,
                    },
                  ]}
                />
              </CustomAccordion>
            </Grid>
          </Grid>
          <CustomDivider
            icon={<SignalCellularAlt color="yellow" />}
            title="شغل ها و مهارت ها"
            bgColor="background.main"
            color="pink.main"
          />
          <Grid
            item
            sx={{
              width: 1,
              my: 8,
              px: 5,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          ></Grid>
        </Box>
      </Grid>
    </>
  );
};
export default BeyondCode;

import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MenuBook, SignalCellularAlt } from "@mui/icons-material";

import { Suspense, useState } from "react";
import CustomDivider from "../../utils/CustomDivider";

import {
  MBTIChart,
  HollandChart,
  BarOnChart,
  NeoChart,
  AptitudeChart,
  ModalDialog,
  CustomAccordion,
} from ".";

import { Helmet } from "react-helmet-async";
import Loading from "../../utils/Loading";

import { btnSx1, gridSx1, gridSx2 } from "./data/sxData";
import { softSkillsData } from "./data/softSkillsData";
const BeyondCode = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const onClickDialog = () => {
    setOpenDialog(!openDialog);
  };

  

  return (
    <>
      <Suspense fallback={<Loading />}>
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
                  xs={6}
                  md={4}
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
            <Grid sx={gridSx2}>
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
      </Suspense>
    </>
  );
};
export default BeyondCode;

import { Suspense, useContext } from "react";
import Context from "../../../context/context";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  BeenhereRounded,
  MenuBook,
  SignalCellularAlt,
} from "@mui/icons-material";

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

import { softSkillsData } from "./data/softSkillsData";
const BeyondCode = () => {
  const { setDialogData, onDialogToggler, themeMode } = useContext(Context);

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
                  xs={6}
                  md={4}
                  key={data.id}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    id={data.id}
                    onClick={() => {
                      onDialogToggler();
                      setDialogData(data);
                    }}
                    sx={{
                      width: 140,
                      p: 2,
                      color: themeMode ? "background.main" : "foreground.main",

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
            <ModalDialog />
            <CustomDivider
              icon={<SignalCellularAlt color="darkPurple" />}
              title="تست های شخصیت"
              bgColor="purple.main"
              color="background.main"
            />
            <Grid
              sx={{
                width: 1,
                my: 8,
                px: 5,
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Grid xs={12}>
                <CustomAccordion
                  title={
                    <Typography>
                      تست هوش هیجانی Bar-On
                      <BeenhereRounded color="green" fontSize="2" />
                    </Typography>
                  }
                >
                  <BarOnChart />
                </CustomAccordion>
                <CustomAccordion
                  title={
                    <Typography>
                      تست شخصیت شناسی MBTI
                      <BeenhereRounded color="green" fontSize="2" />
                    </Typography>
                  }
                >
                  <MBTIChart />
                </CustomAccordion>
                <CustomAccordion
                  title={
                    <Typography>
                      تست شخصیت شناسی NEO
                      {/* <BeenhereRounded color="green" fontSize="2" /> */}
                    </Typography>
                  }
                >
                  <NeoChart />
                </CustomAccordion>
                <CustomAccordion
                  title={
                    <Typography>
                      تست هوش های چندگانه
                      {/* <BeenhereRounded color="green" fontSize="2" /> */}
                    </Typography>
                  }
                >
                  <AptitudeChart />
                </CustomAccordion>
                <CustomAccordion
                  title={
                    <Typography>
                      تست تیپ سنجی شغلی Holland
                      <BeenhereRounded color="green" fontSize="2" />
                    </Typography>
                  }
                >
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

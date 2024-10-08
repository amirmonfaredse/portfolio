import { BarChart } from "@mui/x-charts";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import context from "../../../../context/context";

const BarOnChart = () => {
  const { theme, themeMode } = useContext(context);

  return (
    <Grid
      container
      gap={2}
      px={4}
      sx={{
        flexWrap: {
          xs: "wrap",
          lg: "nowrap",
        },
      }}
    >
      <Grid
        xs={12}
        lg={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          gap: 2,
        }}
        textAlign="center"
      >
        <Button sx={{ color: themeMode ? "background.main" : "orange.main" }}>
          <Typography variant="h5">نمره ی کل هوش هیجانی من : 62</Typography>
        </Button>

        <Button variant="outlined" color="purple">
          <Typography variant="h6" color="purple.main">
            دانلود تفسیر کامل از سایت جاب ویژن
          </Typography>
        </Button>
      </Grid>{" "}
      <Grid xs={12} lg={8} sx={{ height: 200, width: 1 }}>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: [
                "ادراک از خود",
                "تصمیم گیری ",
                "خودابزاری",
                "روابط بین فردی",
                "کنترل استرس",
              ],
              barGapRatio: 0.3,
            },
          ]}
          barLabel="value"
          series={[
            {
              data: [65, 58, 76, 37, 75],
              label: "نمره ی من",
              color: theme.palette.darkPurple.main,
            },
            {
              data: [62, 59, 63, 51, 65],
              color: theme.palette.pink.main,
              label: "میانگین",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
export default BarOnChart;

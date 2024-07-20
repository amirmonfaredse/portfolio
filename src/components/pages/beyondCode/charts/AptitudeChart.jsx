import { BarChart } from "@mui/x-charts";
import { Box, Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import theme from "../../../base/theme/theme";

const AptitudeChart = () => {
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
        item
        xs={12}
        lg={4}
        sx={{
          color: "orange.main",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          gap: 2,
        }}
        textAlign="center"
      >
        <Button variant="outlined" color="purple">
          <Typography variant="h6" color="purple.main">
            دانلود تفسیر کامل از سایت جاب ویژن
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          height: 200,
          width: 1,
        }}
      >
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: [
                "برونگرایی",
                "بی ثباتی عاطفی",
                "توافق پذیری",
                "انعطاف پذیری",
                "وظیفه شناسی",
              ],
              barGapRatio: 0.3,
            },
          ]}
          barLabel="value"
          series={[
            {
              data: [90, 50, 67, 53, 47],
              label: "نمره ی من",
              color: theme.palette.green.main,
            },
            {
              data: [87, 76, 75, 60, 40],
              color: theme.palette.darkPurple.main,
              label: "میانگین",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
export default AptitudeChart;

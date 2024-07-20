import { BarChart } from "@mui/x-charts";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import theme from "../../../base/theme/theme";
const BarOnChart = () => {
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
        <Button color="orange">
          <Typography variant="h5">نمره ی کل هوش هیجانی من : 89</Typography>
        </Button>

        <Button variant="outlined" color="purple">
          <Typography variant="h6" color="purple.main">
            دانلود تفسیر کامل از سایت جاب ویژن
          </Typography>
        </Button>
      </Grid>{" "}
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
              data: [75, 76, 85, 62, 82],
              label: "نمره ی من",
              color: theme.palette.darkBlue.main,
            },
            {
              data: [80, 76, 87, 85, 82],
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

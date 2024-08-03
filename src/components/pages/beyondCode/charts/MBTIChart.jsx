import { BarChart } from "@mui/x-charts/BarChart";
import theme from "../../../base/theme/theme";
import { Box, Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const gridSx1 = {
  color: "orange.main",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  gap: 2,
};
const barChartSx = {
  "& .MuiBarElement-root": {
    "& .MuiBarLabel-root": {
      color: "background.main",
    },
  },
};
const MBTIChart = () => {
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
      <Grid item xs={12} lg={6} sx={gridSx1} textAlign="center">
        <Button color="orange">
          <Typography variant="h5">ESTJ</Typography>
        </Button>
        <Link
          target="_blank"
          rel="noreferrer"
          underline="none"
          color="pink.main"
          href="https://www.16personalities.com/estj-personality"
        >
          <Button color="pink">
            <Typography variant="h6">درمورد ESTJ ها بیشتر بدانید</Typography>
          </Button>
        </Link>
        <Button variant="outlined" color="purple">
          <Typography variant="h6" color="purple.main">
            دانلود تفسیر کامل از سایت جاب ویژن
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ height: 200, width: 1 }}>
        <BarChart
          sx={barChartSx}
          barLabel="value"
          xAxis={[
            {
              data: ["I", "N", "F", "P", "E", "S", "T", "J"],
              scaleType: "band",
              categoryGapRatio: 0.3,
            },
          ]}
          series={[
            {
              data: [43, 35, 37, 45, 57, 65, 63, 55],
              color: theme.palette.purple.main,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default MBTIChart;

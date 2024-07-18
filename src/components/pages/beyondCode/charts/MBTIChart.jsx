import { BarChart, BarElement } from "@mui/x-charts/BarChart";
import theme from "../../../base/theme/theme";
import { Box, Button, Grid, Typography, Link } from "@mui/material";

const MBTIChart = () => {
  return (
    <Box sx={{ width: 1, display: "flex" }}>
      <Grid
        xs={12}
        md={6}
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
      <Grid xs={12} md={6}>
        <BarChart
          sx={{
            "& .MuiBarElement-root": {
              "& .MuiBarLabel-root": {
                color: "background.main",
              },
            },
          }}
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
          width={500}
          height={300}
        />
      </Grid>
    </Box>
  );
};

export default MBTIChart;

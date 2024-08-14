import { BarChart } from "@mui/x-charts/BarChart";
import { Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import context from "../../../../context/context";
const MBTIChart = () => {
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
        lg={6}
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
        <Button sx={{ color: themeMode ? "background.main" : "orange.main" }}>
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
      <Grid xs={12} lg={6} sx={{ height: 200, width: 1 }}>
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
        />
      </Grid>
    </Grid>
  );
};

export default MBTIChart;

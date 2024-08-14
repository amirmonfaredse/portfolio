import { Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PieChart } from "@mui/x-charts";
import { useContext } from "react";
import context from "../../../../context/context";
const HollandChart = () => {
  const { theme, themeMode } = useContext(context);

  return (
    <Grid
      container
      gap={2}
      px={4}
      sx={{
        flexWrap: "wrap",
      }}
    >
      <Grid
        xs={12}
        sx={{
          color: "orange.main",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          my: 2,
        }}
        textAlign="center"
      >
        <Link
          target="_blank"
          rel="noreferrer"
          underline="none"
          color="pink.main"
        >
          <Button sx={{ color: themeMode ? "background.main" : "orange.main" }}>
            <Typography variant="h5">کد هالند من : ESI</Typography>
          </Button>
          <Button color="pink">
            <Typography variant="h6">
              دانلود تفسیر کامل از سایت جاب ویژن
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid
        xs={12}
        sx={{
          height: 300,
          width: 1,
        }}
      >
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: 20,
                  label: "مدیر و جسور",
                  color: theme.palette.red.main,
                },
                {
                  id: 1,
                  value: 18,
                  label: "اجتماعی",
                  color: theme.palette.orange.main,
                },
                {
                  id: 2,
                  value: 18,
                  label: "جستجو گر و تحلیل گر",
                  color: theme.palette.green.main,
                },
                {
                  id: 3,
                  value: 16,
                  label: "هنری",
                  color: theme.palette.cyan.main,
                },
                {
                  id: 4,
                  value: 13,
                  label: "قاعده مند و قراردادی",
                  color: theme.palette.background.main,
                },
                {
                  id: 5,
                  value: 15,
                  label: "عملگرا",
                  color: theme.palette.purple.main,
                },
              ],
              innerRadius: 2,
              paddingAngle: 2,
              cornerRadius: 10,
              border: 0,
              arcLabel: (item) => `${item.value}`,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
export default HollandChart;

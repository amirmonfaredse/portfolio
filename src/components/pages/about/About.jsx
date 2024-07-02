import { Helmet } from "react-helmet-async";
// MUI
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Javascript, SelfImprovementRounded } from "@mui/icons-material";
// SVG Icons
import {
  Html,
  Css,
  Js,
  React,
  Github,
  Bootstrap,
} from "../../../assets/svgIcons";
// Components
import { AboutInfo, ProgressBarSkills, ProgressBarInfo } from "../";
// Images
import AvatarImg from "../../../assets/images/Avatar.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>درباره من </title>
      </Helmet>
      <Card
        sx={{
          height: "auto",
          backgroundColor: "info.main",
        }}
      >
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8}>
              <Divider textAlign="left">
                <Chip
                  color="secondary"
                  sx={{ p: 3 }}
                  icon={<Javascript sx={{ fontSize: 40 }} />}
                  label={
                    <Typography
                      variant="body1"
                      color="success.main"
                      sx={{ textAlign: "center" }}
                    >
                      برنامه نویس
                    </Typography>
                  }
                />
              </Divider>
              <AboutInfo>نام و نام خانوادگی : امیررضا منفرد</AboutInfo>
              <AboutInfo>سن : 24 سال </AboutInfo>
              <AboutInfo>شهر : اصفهان</AboutInfo>
              <AboutInfo>monfared.dev@gmail.com : ایمیل</AboutInfo>
            </Grid>
            <Grid xs={0} sm={0} md={4} lg={4}>
              <Avatar
                src={AvatarImg}
                variant="rounded"
                sx={{
                  height: 250,
                  width: 250,
                  m: "0 auto",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                AM
              </Avatar>
            </Grid>
          </Grid>
          <Grid container>
            <Grid sx={{ width: 1, mt: 4 }}>
              <Divider textAlign="center">
                <Chip
                  color="error"
                  sx={{ p: 3 }}
                  icon={<SelfImprovementRounded sx={{ fontSize: 40 }} />}
                  label={
                    <Typography
                      variant="body1"
                      color="success.main"
                      sx={{ textAlign: "center" }}
                    >
                      مهارت ها
                    </Typography>
                  }
                />
              </Divider>
              <ProgressBarSkills value="80" Color="htmlIcon">
                <ProgressBarInfo>80%</ProgressBarInfo>
                <Html />
              </ProgressBarSkills>
              <ProgressBarSkills value="50" Color="cssIcon">
                <ProgressBarInfo>50%</ProgressBarInfo>
                <Css />
              </ProgressBarSkills>
              <ProgressBarSkills value="40" Color="jsIcon">
                <ProgressBarInfo>40%</ProgressBarInfo>
                <Js />
              </ProgressBarSkills>
              <ProgressBarSkills value="30" Color="reactIcon">
                <ProgressBarInfo>30%</ProgressBarInfo>
                <React />
              </ProgressBarSkills>
              <ProgressBarSkills value="30" Color="gitHubIcon">
                <ProgressBarInfo>30%</ProgressBarInfo>
                <Github />
              </ProgressBarSkills>
              <ProgressBarSkills value="60" Color="bootstarpIcon">
                <ProgressBarInfo>60%</ProgressBarInfo>
                <Bootstrap />
              </ProgressBarSkills>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default About;

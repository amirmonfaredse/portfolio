import { AccountTreeRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CMAIMG from "../../../assets/images/project/Cma.png";
import {
  BootstrapSVG,
  JsonSVG,
  ReactSVG,
  RrdSVG,
  FormikSVG,
} from "../../../assets/svgIcons";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../../utils/CustomDivider";
import { Suspense } from "react";
import Loading from "../../utils/Loading";
const boxSx1 = {
  direction: "ltr",
  m: 5,
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
};
const cardActionSx1 = {
  bgcolor: "background.main",
  direction: "rtl",
  position: "relative",
};
const linkSx1 = {
  fontSize: 15,
  border: "1px solid",
  p: 1,
  ml: 2,
  mt: 4,
  borderRadius: 2,
  position: "absolute",
};
const projectData = [
  {
    id: 1,
    image: CMAIMG,
    title: "پروژه مدیریت مخاطبین",
    gitLink: "https://github.com/amirmonfaredse/contacts-manager-app",
    designBy: [
      { id: 1, title: "React", icon: <ReactSVG /> },
      { id: 2, title: "Bootstrap", icon: <BootstrapSVG /> },
      { id: 1, title: "Json", icon: <JsonSVG /> },
      { id: 1, title: "Formik", icon: <FormikSVG /> },
      { id: 1, title: "RRD", icon: <RrdSVG /> },
    ],
  },
];
const Project = () => {
  const toolTipObject = {
    popper: {
      sx: {
        [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
          {
            marginTop: "0px",
          },
        [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
          {
            marginBottom: "0px",
          },
        [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
          {
            marginLeft: "0px",
          },
        [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
          {
            marginRight: "0px",
          },
      },
    },
  };
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>پروژه های من</title>
        </Helmet>
        <Grid container>
          <Grid sx={{ width: 1, mt: 4 }}>
            <CustomDivider
              title="پروژه های من "
              icon={
                <AccountTreeRounded color="purple.main" sx={{ fontSize: 30 }} />
              }
              color="background.main"
              bgColor="red.main"
            />

            <Box sx={boxSx1}>
              <Grid xs={12} md={6} lg={4} m={2}>
                {projectData.map((project) => {
                  return (
                    <Card key={project.id} sx={{ maxWidth: 400 }}>
                      <CardMedia
                        sx={{ height: 200, objectFit: "cover" }}
                        image={project.image}
                        title={project.title}
                      />
                      <CardContent sx={{ bgcolor: "background.main" }}>
                        <CardActions sx={cardActionSx1}>
                          <Tooltip
                            title={
                              <Typography
                                variant="body2"
                                sx={{ color: "purple.main" }}
                              >
                                مشاهده پروژه در گیت هاب
                              </Typography>
                            }
                            osltProps={toolTipObject}
                          >
                            <Link
                              href={project.gitLink}
                              target="_blank"
                              rel="noreferrer"
                              underline="none"
                              color="purple.main"
                              sx={linkSx1}
                            >
                              GitHub
                            </Link>
                          </Tooltip>
                        </CardActions>
                        <Typography variant="body1" color="purple.main">
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="purple.main"
                          sx={{ my: 2 }}
                        >
                          طراحی شده با :
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {project.designBy.map((t) => {
                            return (
                              <Tooltip
                                key={t.id}
                                title={
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "green.main" }}
                                  >
                                    {t.title}
                                  </Typography>
                                }
                                osltProps={toolTipObject}
                              >
                                <Button sx={{ p: 0, m: 0 }}>{t.icon}</Button>
                              </Tooltip>
                            );
                          })}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
                <Card></Card>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};
export default Project;

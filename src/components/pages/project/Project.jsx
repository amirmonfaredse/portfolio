import { AccountTreeRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Tooltip from "@mui/material/Tooltip";
import { tooltipClasses } from "@mui/material/Tooltip";

import { Helmet } from "react-helmet-async";
import CustomDivider from "../../utils/CustomDivider";
import { Suspense, useContext } from "react";
import Loading from "../../utils/Loading";
import { projectDatas } from "./data/projectsData";
import context from "../../../context/context";

const Project = () => {
  const { themeMode } = useContext(context);
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

            <Box
              sx={{
                direction: "ltr",
                m: 5,
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Grid xs={12} md={6} lg={4} m={2}>
                {projectDatas.map((project) => {
                  return (
                    <Card
                      key={project.id}
                      sx={{ maxWidth: 400, height: "auto" }}
                    >
                      <CardMedia
                        sx={{
                          height: 200,
                          objectFit: "cover",
                        }}
                        image={project.image}
                        title={project.title}
                      />
                      <CardContent
                        sx={{
                          bgcolor: themeMode
                            ? "purple.main"
                            : "background.main",
                        }}
                      >
                        <CardActions
                          sx={{
                            bgcolor: themeMode
                              ? "purple.main"
                              : "background.main",
                            direction: "rtl",
                            position: "relative",
                          }}
                        >
                          <Tooltip
                            title={
                              <Typography
                                variant="body2"
                                component="span"
                                sx={{
                                  color: themeMode
                                    ? "foreground.main"
                                    : "purple.main",
                                }}
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
                              sx={{
                                color: themeMode
                                  ? "background.main"
                                  : "purple.main",
                                fontSize: 15,
                                border: "1px solid",
                                p: 1,
                                ml: 2,
                                mt: 4,
                                borderRadius: 2,
                                position: "absolute",
                              }}
                            >
                              GitHub
                            </Link>
                          </Tooltip>
                        </CardActions>
                        <Typography
                          variant="body1"
                          sx={{
                            color: themeMode
                              ? "background.main"
                              : "purple.main",
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{
                            mt: 2,
                            color: themeMode
                              ? "background.main"
                              : "purple.main",
                          }}
                        >
                          طراحی شده با :
                        </Typography>
                        <Typography
                          variant="body2"
                          component="span"
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
                                    component="span"
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
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};
export default Project;

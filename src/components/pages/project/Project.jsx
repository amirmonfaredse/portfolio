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

import { Helmet } from "react-helmet-async";
import CustomDivider from "../../utils/CustomDivider";
import { Suspense } from "react";
import Loading from "../../utils/Loading";

import { boxSx1, cardActionSx1, linkSx1, toolTipObject } from "./data/sxData";
const Project = () => {
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
                {/* {projectData.map((project) => {
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
                                component="span"
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
                          component="span"
                          color="purple.main"
                          sx={{ my: 2 }}
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
                })} */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};
export default Project;

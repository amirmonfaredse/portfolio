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
} from "../../../assets/svgIcons";
import FormikSVG from "../../../assets/svgIcons/FormikSVG";
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
    <Grid container>
      <Grid sx={{ width: 1, mt: 4 }}>
        <Divider textAlign="center">
          <Chip
            sx={{ p: 3, color: "purple.main", bgcolor: "background.main" }}
            icon={
              <AccountTreeRounded color="purple.main" sx={{ fontSize: 30 }} />
            }
            label={
              <Typography
                variant="body1"
                color="green.main"
                sx={{ textAlign: "center" }}
              >
                پروژه های من
              </Typography>
            }
          />
        </Divider>

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
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 200, objectFit: "cover" }}
                image={CMAIMG}
                title="پروژه مدیریت مخاطبین"
              />
              <CardContent sx={{ bgcolor: "background.main" }}>
                <CardActions
                  sx={{
                    bgcolor: "background.main",
                    direction: "rtl",
                    position: "relative",
                  }}
                >
                  <Tooltip
                    title={
                      <Typography variant="body2" sx={{ color: "purple.main" }}>
                        مشاهده پروژه در گیت هاب
                      </Typography>
                    }
                    osltProps={toolTipObject}
                  >
                    <Link
                      href="#"
                      underline="none"
                      color="purple.main"
                      sx={{
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
                <Typography variant="body1" color="purple.main">
                  پروژه React مدیریت مخاطبین
                </Typography>
                <Typography variant="body2" color="purple.main" sx={{ my: 2 }}>
                  طراحی شده با :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Tooltip
                    title={
                      <Typography variant="body2" sx={{ color: "green.main" }}>
                        React
                      </Typography>
                    }
                    osltProps={toolTipObject}
                  >
                    <Button sx={{ p: 0, m: 0 }}>
                      <ReactSVG />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={
                      <Typography variant="body2" sx={{ color: "green.main" }}>
                        Bootstrap
                      </Typography>
                    }
                    osltProps={toolTipObject}
                  >
                    <Button sx={{ p: 0, m: 0 }}>
                      <BootstrapSVG />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={
                      <Typography variant="body2" sx={{ color: "green.main" }}>
                        Json
                      </Typography>
                    }
                    osltProps={toolTipObject}
                  >
                    <Button sx={{ p: 0, m: 0 }}>
                      <JsonSVG />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={
                      <Typography variant="body2" sx={{ color: "green.main" }}>
                        Formik
                      </Typography>
                    }
                    osltProps={toolTipObject}
                  >
                    <Button sx={{ p: 0, m: 0 }}>
                      <FormikSVG />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title={
                      <Typography variant="body2" sx={{ color: "green.main" }}>
                        RRD
                      </Typography>
                    }
                    osltProps={toolTipObject}
                  >
                    <Button sx={{ p: 0, m: 0 }}>
                      <RrdSVG />
                    </Button>
                  </Tooltip>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Project;

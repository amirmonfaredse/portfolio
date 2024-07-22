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
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  sx={{ height: 200, objectFit: "cover" }}
                  image={CMAIMG}
                  title="پروژه مدیریت مخاطبین"
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
                        href="#"
                        underline="none"
                        color="purple.main"
                        sx={linkSx1}
                      >
                        GitHub
                      </Link>
                    </Tooltip>
                  </CardActions>
                  <Typography variant="body1" color="purple.main">
                    پروژه React مدیریت مخاطبین
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
                    sx={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Tooltip
                      title={
                        <Typography
                          variant="body2"
                          sx={{ color: "green.main" }}
                        >
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
                        <Typography
                          variant="body2"
                          sx={{ color: "green.main" }}
                        >
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
                        <Typography
                          variant="body2"
                          sx={{ color: "green.main" }}
                        >
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
                        <Typography
                          variant="body2"
                          sx={{ color: "green.main" }}
                        >
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
                        <Typography
                          variant="body2"
                          sx={{ color: "green.main" }}
                        >
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
    </>
  );
};
export default Project;

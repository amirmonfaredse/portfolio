import { Typography, Box, Button } from "@mui/material";
import { DataObjectRounded } from "@mui/icons-material";
import { Suspense, useContext } from "react";
import Loading from "../../utils/Loading";
import context from "../../../context/context";

const BannerInfo = ({ isUpLg }) => {
  const { themeMode } = useContext(context);
  return (
    <Suspense fallback={<Loading />}>
      <Box
        sx={{
          direction: "ltr",
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "right",
            sm: "center",
            md: "right",
          },
          alignItems: {
            xs: "right",
            sm: "center",
            md: "right",
          },
          pl: {
            xs: 0,
            md: 2,
          },
          mt: {
            xs: 2,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            width: {
              md: 1,
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            flexWrap: {
              sm: "wrap",
            },
            my: {
              xs: 2,
              md: 0,
            },
            gap: {
              xs: 0.5,
              md: 0,
            },
          }}
        >
          <Typography
            variant={isUpLg ? "h3" : "h4"}
            sx={{
              color: themeMode ? "background.main" : "foreground.main",
              mr: 1,
              mb: 1,
            }}
          >
            برنامه نویس
          </Typography>
          <Typography
            variant={isUpLg ? "h3" : "h4"}
            sx={{
              display: {
                xs: "",
                md: "flex",
              },
              color: themeMode ? "background.main" : "foreground.main",
              mr: 1,
            }}
          >
            و توسعه دهنده
          </Typography>
          <Typography
            variant={isUpLg ? "h3" : "h4"}
            sx={{ color: themeMode ? "background.main" : "orange.main", ml: 1 }}
          >
            {isUpLg ? "Js" : "Javascript"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: themeMode ? "background.main" : "purple.main",
              color: themeMode ? "foreground.main" : "darkPurple.main",
              mt: {
                xs: 1,
                md: 5,
              },
              width: {
                xs: 1,
                sm: 200,
              },
              borderRadius: {
                xs: "5px 5px 15px 15px",
                md: "5px 15px 15px 5px",
              },
              "&:hover": {
                bgcolor: themeMode ? "darkBlue.main" : "pink.main",
              },
            }}
            startIcon={<DataObjectRounded />}
          >
            مشاهده مهارت ها
          </Button>
        </Box>
      </Box>
    </Suspense>
  );
};
export default BannerInfo;

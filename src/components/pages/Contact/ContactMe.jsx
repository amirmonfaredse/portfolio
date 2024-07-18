import {
  Box,
  Button,
  Card,
  CardActions,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  MailOutlineRounded,
  Person2Rounded,
  AlternateEmailRounded,
  SubjectRounded,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomDivider from "../../utils/CustomDivider";
import BackGround from "./BackGround";
import Meditate from "../../../assets/images/Hobbies - Hobbies Fill.png";
const ContactMe = () => {
  return (
    <BackGround>
      <Grid
        container
        sx={{
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <CustomDivider
          title="تماس با من"
          bgColor="pink.main"
          color="background.main"
          icon={<MailOutlineRounded color="background.main" />}
        />
        <Container
          sx={{ direction: "ltr", my: 3, display: "flex", flexWrap: "wrap" }}
        >
          <Grid xs={12} sm={12} md={12} lg={6} px={2} my={4}>
            <Card sx={{ bgcolor: "darkPurple.main", p: 2 }}>
              <Box sx={{ my: 3 }}>
                <TextField
                  fullWidth
                  label="نام و نام خانوادگی "
                  naem="fullName"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Person2Rounded color="pink" />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  color="purple"
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <TextField
                  fullWidth
                  label="ایمیل"
                  naem="email"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AlternateEmailRounded color="pink" />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  color="purple"
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <TextField
                  fullWidth
                  label="موضوع"
                  naem="subject"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded color="pink" />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  color="purple"
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="متن پیام"
                  naem="textArea"
                  variant="outlined"
                  size="small"
                  color="purple"
                />
              </Box>

              <CardActions>
                <Button
                  type="submit"
                  color="orange"
                  fullWidth
                  variant="contained"
                  sx={{ color: "background.main" }}
                >
                  ارسال کن
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            xs={0}
            sm={0}
            md={0}
            lg={6}
            sx={{
              overflow: "hidden",
              display: "felx",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Meditate} alt="medetate" sx={{ width: "100%" }} />
          </Grid>
        </Container>
      </Grid>
    </BackGround>
  );
};
export default ContactMe;

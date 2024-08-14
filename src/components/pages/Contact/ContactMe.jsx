import { Suspense, useContext } from "react";

// MUI
import { Box, Button, Card, CardActions, Container } from "@mui/material";
import {
  Person2Rounded,
  AlternateEmailRounded,
  SubjectRounded,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

// Validation
import { userSchema } from "./validation/userSchema";
import { useFormik } from "formik";

import CustomField from "../../utils/CustomField";
import Socials from "./components/Socials";
import Loading from "../../utils/Loading";
import context from "../../../context/context";
const ContactMeForm = () => {
  const { themeMode } = useContext(context);
  const userInitailValue = {
    fullName: "",
    email: "",
    subject: "",
    textArea: "",
  };
  const formik = useFormik({
    initialValues: userInitailValue,
    onSubmit: (values) => {
      console.log("form values", values);
    },
    validationSchema: userSchema,
  });
  return (
    <Suspense fallback={<Loading />}>
      <Container
        sx={{ direction: "ltr", my: 3, display: "flex", flexWrap: "wrap" }}
      >
        <Grid xs={12} lg={6} px={2} my={4}>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Card
              sx={{
                bgcolor: themeMode ? "purple.main" : "currentLine.main",
                p: 2,
              }}
            >
              <Box sx={{ my: 1 }}>
                <CustomField
                  label="نام"
                  name="fullName"
                  icon={
                    <Person2Rounded
                      sx={{
                        color: themeMode ? "background.main" : "pink.main",
                      }}
                    />
                  }
                  helperText={
                    formik.touched.fullName ? formik.errors.fullName : null
                  }
                  error={Boolean(
                    formik.touched.fullName && formik.errors.fullName
                  )}
                  value={formik.values?.fullName}
                  onChange={formik.handleChange}
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <CustomField
                  type="email"
                  label="ایمیل"
                  name="email"
                  icon={
                    <AlternateEmailRounded
                      sx={{
                        color: themeMode ? "background.main" : "pink.main",
                      }}
                    />
                  }
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <CustomField
                  label="موضوع"
                  name="subject"
                  icon={
                    <SubjectRounded
                      sx={{
                        color: themeMode ? "background.main" : "pink.main",
                      }}
                    />
                  }
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <CustomField
                  label="متن پیام"
                  name="textArea"
                  multiline
                  rows={6}
                  helperText={
                    formik.touched.textArea ? formik.errors.textArea : null
                  }
                  error={Boolean(
                    formik.touched.textArea && formik.errors.textArea
                  )}
                  value={formik.values?.textArea}
                  onChange={formik.handleChange}
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
          </form>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            display: "felx",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Socials />
        </Grid>
      </Container>
    </Suspense>
  );
};
export default ContactMeForm;

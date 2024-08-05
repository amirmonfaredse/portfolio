import { Suspense } from "react";

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
import { gridSx1 } from "./data/sxData";
import Socials from "./components/Socials";
const ContactMeForm = () => {
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
    <Suspense>
      <Container
        sx={{ direction: "ltr", my: 3, display: "flex", flexWrap: "wrap" }}
      >
        <Grid xs={12} lg={6} px={2} my={4}>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Card sx={{ bgcolor: "darkPurple.main", p: 2 }}>
              <Box sx={{ my: 3 }}>
                <CustomField
                  label="نام"
                  name="fullName"
                  icon={<Person2Rounded color="pink" />}
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
              <Box sx={{ my: 3 }}>
                <CustomField
                  type="email"
                  label="ایمیل"
                  name="email"
                  icon={<AlternateEmailRounded color="pink" />}
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <CustomField
                  label="موضوع"
                  name="subject"
                  icon={<SubjectRounded color="pink" />}
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
              <Box sx={{ my: 3 }}>
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
        <Grid xs={12} lg={6} sx={gridSx1}>
          <Socials />
        </Grid>
      </Container>
    </Suspense>
  );
};
export default ContactMeForm;

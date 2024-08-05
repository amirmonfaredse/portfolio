import { MailOutlineRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomDivider from "../../utils/CustomDivider";
import BackGround from "./components/BackGround";
import ContactMe from "./ContactMe";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import Loading from "../../utils/Loading";
const ContactMeContainer = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>تماس با من</title>
        </Helmet>
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
            <ContactMe />
          </Grid>
        </BackGround>
      </Suspense>
    </>
  );
};
export default ContactMeContainer;

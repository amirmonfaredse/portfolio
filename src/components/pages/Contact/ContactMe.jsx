import { MailOutlineRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomDivider from "../../utils/CustomDivider";
import BackGround from "./BackGround";
import ContactMeForm from "./ContactMeForm";
import { Helmet } from "react-helmet-async";
const ContactMe = () => {
  return (
    <>
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
          <ContactMeForm />
        </Grid>
      </BackGround>
    </>
  );
};
export default ContactMe;

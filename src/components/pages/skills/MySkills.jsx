import {
  SelfImprovementRounded,
  Brush,
  ConstructionRounded,
  FoundationRounded,
} from "@mui/icons-material";
import { ProgressBarSkills } from "..";

import {
  HtmlToolTip,
  CssToolTip,
  JsToolTip,
  ReactToolTip,
  BootstrapToolTip,
  MuiToolTip,
  GithubToolTip,
  NextToolTip,
  CleanCodeToolTip,
  OOPToolTip,
  VSCodeToolTip,
  PostmanToolTip,
} from "./ToolTips";
import Grid from "@mui/material/Unstable_Grid2";
import CustomDivider from "../../utils/CustomDivider";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import Loading from "../../utils/Loading";

const MySkills = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>مهارت های من</title>
        </Helmet>
        <Grid container>
          <Grid sx={{ width: 1, mt: 4 }}>
            <CustomDivider
              title="مهارت های پایه"
              icon={
                <SelfImprovementRounded
                  color="darkPurple"
                  sx={{ fontSize: 30, color: "background.main" }}
                />
              }
              color="darkPurple.main"
            />

            <ProgressBarSkills linearValue={90} icon={<HtmlToolTip />} />
            <ProgressBarSkills linearValue={75} icon={<CssToolTip />} />
            <ProgressBarSkills linearValue={70} icon={<JsToolTip />} />
            <ProgressBarSkills linearValue={60} icon={<ReactToolTip />} />
            <ProgressBarSkills linearValue={20} icon={<NextToolTip />} />
            <CustomDivider
              bgColor="red.main"
              title="UI طراحی"
              icon={
                <Brush
                  color="darkPurple"
                  sx={{ fontSize: 30, color: "background.main" }}
                />
              }
              color="darkPurple.main"
            />

            <ProgressBarSkills linearValue={70} icon={<BootstrapToolTip />} />

            <ProgressBarSkills linearValue={60} icon={<MuiToolTip />} />

            <CustomDivider
              bgColor="green.main"
              title="ابزار ها"
              icon={
                <ConstructionRounded
                  color="darkPurple"
                  sx={{ fontSize: 30, color: "background.main" }}
                />
              }
              color="darkPurple.main"
            />

            <ProgressBarSkills linearValue={30} icon={<GithubToolTip />} />
            <ProgressBarSkills linearValue={50} icon={<VSCodeToolTip />} />
            <ProgressBarSkills linearValue={40} icon={<PostmanToolTip />} />
            <CustomDivider
              bgColor="darkPurple.main"
              title="مفاهیم"
              icon={
                <FoundationRounded
                  color="darkPurple"
                  sx={{ fontSize: 30, color: "orange.main" }}
                />
              }
              color="orange.main"
            />
            <ProgressBarSkills linearValue={60} icon={<CleanCodeToolTip />} />
            <ProgressBarSkills linearValue={40} icon={<OOPToolTip />} />
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};
export default MySkills;

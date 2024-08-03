import { Box, Button, Grid } from "@mui/material";
import { MenuBook, SignalCellularAlt } from "@mui/icons-material";
import { Suspense, useState } from "react";
import ModalDialog from "./ModalDialog";
import CustomDivider from "../../utils/CustomDivider";
import CustomAccordion from "./CustomAccordion";
import {
  LearningSVG,
  PlanningSVG,
  SolutionSVG,
  TimeManageSVG,
  TeamWorkSVG,
  PrioritySVG,
} from "../../../assets/svgIcons";
import MBTIChart from "./charts/MBTIChart";
import HollandChart from "./charts/HollandChart";
import BarOnChart from "./charts/BarOnChart";
import NeoChart from "./charts/NeoChart";
import AptitudeChart from "./charts/AptitudeChart";
import { Helmet } from "react-helmet-async";
import Loading from "../../utils/Loading";
const gridSx1 = {
  width: {
    sm: 1,
    lg: "60%",
  },
  mx: {
    sm: "none",
    lg: "auto",
  },
  display: "flex",
  justifyContent: "center",
  my: 8,
};
const btnSx1 = {
  width: 140,
  p: 2,
  color: "foreground.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  borderRadius: "50%",
};
const gridSx2 = {
  width: 1,
  my: 8,
  px: 5,
  display: "flex",
  justifyContent: "left",
};
const BeyondCode = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const onClickDialog = () => {
    setOpenDialog(!openDialog);
  };

  const softSkillsData = [
    {
      id: `softSkillsData-${1}`,
      name: "مهارت در یادگیری",
      about: `یکی از مهم ترین مهارت ها در زندگی و کار ، مهارت داشتن در یادگیریه ، میزان توان من در یادگرفتن مهارت ها و دانش مختلف ، توان کلی من در"بهبود" رو شرح میده . تمرکز من بر روی کاهش زمان یادگیری و یادگیری عمیق تر بوده ، در برنامه نویسی تقریبا همه چیز رو با تجربه کردن یادگرفته ام تا علاوه بر تجربه ی واقعی یک تکنولوژی ، درک کلی از اون تکنولوژی رو با یک مثال واقعی تر در خودم ایجاد کنم`,
      icon: <LearningSVG />,
    },
    {
      id: `softSkillsData-${2}`,
      name: "برنامه ریزی ",
      about: `برنامه ریزی در واقع ، پیاده کردن اهداف بر روی کاغذه و صحیح ترین نحوه ی فکر کردن ، نوشتن افکاره ! دیدگاه من برای برنامه ریزی ، فقط برای طبقه بندی و ترتیب بندی اهداف و وظایف مختلف نیست . من از برنامه ریزی برای مدیریت کردن نقشه ی راه خودم استفاده میکنم ، تا هم بالاترین توان یادگیری رو حفظ کنم و هم اولویت بندی رو بتونم به شکل بصری برای خودم مشخص کنم`,
      icon: <PlanningSVG />,
    },
    {
      id: `softSkillsData-${3}`,
      name: "حل مسئله",
      about: `چالش اصلی ! جدای از استفاده از تجربه برای حل مسائل ، تمرکز من بر یادگیری الگوریتم و فلوچارت ، دیزاین پترن ها و روش های برنامه نویسی مختلف بوده ، من اعتقاد دارم که ابتدا با تقلید کردن مهارت به دست می یاد و بعد از استاد شدن در تقلید کردن ، میتونم روش های خودم رو ابداع کنم ،اما گاهی لازمه که خودمون رو با فکر کردن بر روی مسائل به چالش بکشیم `,
      icon: <SolutionSVG />,
    },
    {
      id: `softSkillsData-${4}`,
      name: "اولویت بندی",
      about: `ترکیب برنامه ریزی و مهارت در یادگیری زمانی معنا و مفهوم پیدا میکنه (مخصوصا در جهان برنامه نویسی) که اولویت بندی به طور صحیح اجرا بشه ، جهان برنامه نویسی بسیار گسترده ست ، چه در زمان یادگیری و چه در زمان انجام پروژه ، مهمه اولویت بندی ما ، انعطاف پذیری لازم برای انجام کار و یا یادگیری رو به ما بده تا در حین عمل ، هم دستاورد های قابل قبولی داشته باشیم ، هم درگیر چرخه ی بینهایت "کامل نیست" نشیم !`,
      icon: <PrioritySVG />,
    },
    {
      id: `softSkillsData-${5}`,
      name: "کارگروهی",
      about: `کار با گروه ، همیشه دستاورد های بهتری رو میتونه فراهم کنه ، چالش کار با یک گروه ، نیاز به مهارت هایی داره که در هیچ پکیج آموزشی زبان برنامه نویسی یاد نمیدن! لازمه ی همدلی ، احترام و درک مناسب ،توجه به نیاز های شخصی اعضای گروه ، باعث میشه یک گروه کار هایی انجام بده که هزاران نفر به تنهایی نمیتونند انجام بدن`,
      icon: <TeamWorkSVG />,
    },
    {
      id: `softSkillsData-${6}`,
      name: "مدیریت زمان",
      about: `با ارزش ترین منبعی که در اختیار ماست ، زمانه . مدیریت زمان بالاترین ارزش رو در هر حیطه ی شغلی و زندگی داره . ترکیبی از مهارت یادگیری ، اولویت بندی و برنامه ریزی ، کار گروهی و توان حل مسئله ، توان مدیریت زمان رو به من میده. من تلاش میکنم دستاورد به دست آمده در طول زمان رو تا حد ممکن بهینه و قابل قبول نگه دارم `,
      icon: <TimeManageSVG />,
    },
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>من فراتر از کد</title>
        </Helmet>
        <Grid container>
          <Box sx={{ mt: 2, width: 1 }}>
            <CustomDivider
              icon={<MenuBook color="purple.main" />}
              title="مهارت های نرم"
              bgColor="orange.main"
              color="darkPurple.main"
            />
            <Grid container sx={gridSx1}>
              {softSkillsData.map((data) => (
                <Grid
                  item
                  xs={6}
                  md={4}
                  key={data.id}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    id={data.id}
                    onClick={() => {
                      onClickDialog();
                      setDialogData(data);
                    }}
                    sx={btnSx1}
                  >
                    {data.icon || null}
                    {data.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <ModalDialog
              openDialog={openDialog}
              dialogData={dialogData}
              onClickDialog={onClickDialog}
            />
            <CustomDivider
              icon={<SignalCellularAlt color="darkPurple" />}
              title="تست های شخصیت"
              bgColor="purple.main"
              color="background.main"
            />
            <Grid item sx={gridSx2}>
              <Grid xs={12}>
                <CustomAccordion title="تست هوش هیجانی Bar-On">
                  <BarOnChart />
                </CustomAccordion>
                <CustomAccordion title="تست شخصیت شناسی MBTI">
                  <MBTIChart />
                </CustomAccordion>
                <CustomAccordion title="تست شخصیت شناسی NEO">
                  <NeoChart />
                </CustomAccordion>
                <CustomAccordion title="تست هوش های چندگانه">
                  <AptitudeChart />
                </CustomAccordion>
                <CustomAccordion title="تیپ سنجی شغلی Holland">
                  <HollandChart />
                </CustomAccordion>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Suspense>
    </>
  );
};
export default BeyondCode;

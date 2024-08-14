import {
  BootstrapSVG,
  JsonSVG,
  ReactSVG,
  RrdSVG,
  FormikSVG,
} from "../../../../assets/svgIcons";
import CMAIMG from "../../../../assets/images/project/Cma.png";

export const projectDatas = [
  {
    id: 1,
    image: CMAIMG,
    title: "پروژه مدیریت مخاطبین",
    gitLink: "https://github.com/amirmonfaredse/contacts-manager-app",
    designBy: [
      { id: 1, title: "React", icon: <ReactSVG /> },
      { id: 2, title: "Bootstrap", icon: <BootstrapSVG /> },
      { id: 1, title: "Json", icon: <JsonSVG /> },
      { id: 1, title: "Formik", icon: <FormikSVG /> },
      { id: 1, title: "RRD", icon: <RrdSVG /> },
    ],
  },
];

import RadialBar01 from "../../components/bars/radialBar01/RadialBar01";
import TopBar02 from "../../components/bars/topBar02/TopBar02";
import { BarsData } from "./bars";

export const dataBars: BarsData[] = [
  {
    id: 1,
    title: "Radial Menu",
    description: "Animated Radial Menu using Html CSS & Vanilla Javascript",
    content: <RadialBar01 />,
    date: "2022-09-30",
    youtube: {
      chanel: "Online Tutorials",
      link: "https://www.youtube.com/watch?v=koTXGYLkPBo",
    },
  },
  {
    id: 2,
    title: "Topbar With Search",
    description:
      "Responsive Navigation Menu with Search Bar | Html CSS & Javascript",
    content: <TopBar02 />,
    date: "2022-10-03",
    youtube: {
      chanel: "Online Tutorials",
      link: "https://www.youtube.com/watch?v=zQngLMkngQE",
    },
  },
];

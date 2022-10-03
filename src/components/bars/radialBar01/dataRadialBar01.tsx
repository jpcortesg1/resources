import { RadialBar01Item } from "./radialBar01";
import { AiOutlineHome, AiOutlineSetting, AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsCameraReels, BsCamera } from "react-icons/bs";
import { HiOutlineKey } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";

export const items: RadialBar01Item[] = [
  {
    icon: <AiOutlineHome />,
  },
  {
    icon: <BsPerson />,
  },
  {
    icon: <AiOutlineSetting />,
  },
  {
    icon: <AiOutlineMail />,
  },
  {
    icon: <HiOutlineKey />,
  },
  {
    icon: <BsCameraReels />,
  },
  {
    icon: <IoGameControllerOutline />,
  },
  {
    icon: <BsCamera />,
  },
];

// 8 colors of different shades
export const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
];

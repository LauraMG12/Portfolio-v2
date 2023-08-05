import { GradientType } from "../state/AppState";
import { IconType } from "../components/shared/SvgIcon/SvgIconHelper";

interface ProjectOverview {
  id: number;
  color: GradientType;
  info: ProjectInfo;
}

export interface ProjectInfo {
  title: string;
  technologies: Technology[];
  image: string;
  description: string;
}

interface Technology {
  name: string;
  iconName: IconType;
}

export const projects: ProjectOverview[] = [
  {
    id: 1,
    color: "blue",
    info: {
      title: "Project title",
      technologies: [
        { name: "HTML", iconName: "html" },
        { name: "CSS3", iconName: "css" },
      ],
      image: "home-background",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
    },
  },
  {
    id: 2,
    color: "pink",
    info: {
      title: "Project title",
      technologies: [
        { name: "HTML", iconName: "html" },
        { name: "CSS3", iconName: "css" },
      ],
      image: "home-background",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
    },
  },
  {
    id: 3,
    color: "orange",
    info: {
      title: "Project title",
      technologies: [
        { name: "HTML", iconName: "html" },
        { name: "CSS3", iconName: "css" },
      ],
      image: "home-background",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
    },
  },
];

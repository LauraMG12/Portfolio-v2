import { GradientType } from "../state/AppState";
import { IconTypes } from "../components/shared/SvgIcon/SvgIconHelper";

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
  iconName: IconTypes;
}

export const projects: ProjectOverview[] = [
  {
    id: 1,
    color: "blue",
    info: {
      title: "Project title",
      technologies: [
        { name: "HTML", iconName: IconTypes.HTML },
        { name: "CSS3", iconName: IconTypes.CSS },
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
        { name: "HTML", iconName: IconTypes.HTML },
        { name: "CSS3", iconName: IconTypes.CSS },
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
        { name: "HTML", iconName: IconTypes.HTML },
        { name: "CSS3", iconName: IconTypes.CSS },
      ],
      image: "home-background",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
    },
  },
];

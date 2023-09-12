import { GradientType } from "../state/AppState";
import { IconType } from "../components/shared/SvgIcon/SvgIconHelper";

interface ProjectsSectionInfo {
  sectionTitle: string;
  projects: ProjectOverview[];
  subProjects: SubProjectInfo[];
}
interface ProjectOverview {
  id: number;
  color: GradientType;
  info: ProjectInfo;
}
export interface SubProjectInfo {
  id: number;
  title: string;
  image: string;
  description: string;
  runTo: string;
  codeTo?: string;
}

export interface ProjectInfo {
  title: string;
  technologies: Technology[];
  image: string;
  description: string;
  runTo: string;
  codeTo?: string;
}

interface Technology {
  name: string;
  iconName: IconType;
}

export const projects: ProjectsSectionInfo = {
  sectionTitle: "Projects",
  projects: [
    {
      id: 1,
      color: "blue",
      info: {
        title: "Sembo - Trip planner",
        technologies: [
          { name: "HTML", iconName: "html" },
          { name: "CSS3", iconName: "css" },
          { name: "Sass", iconName: "sass" },
          { name: "JavaScript", iconName: "js" },
          { name: "TypeScript", iconName: "ts" },
          { name: "Vue3", iconName: "vue" },
          { name: "Jest", iconName: "jest" },
          { name: "Bitbucket", iconName: "bitbucket" },
          { name: "RxJs", iconName: "rxjs" },
          //TODO: complete technologies
          //rxjs
          //graphQL
          //git
          //npm
          //yarn
          //storybook
          //trello
          //vscode
          //vitest
        ],
        image: "trip-planner.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.`,
        runTo:
          "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
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
          { name: "Sass", iconName: "sass" },
          { name: "JavaScript", iconName: "js" },
          { name: "TypeScript", iconName: "ts" },
          { name: "Vue3", iconName: "vue" },
          { name: "Jest", iconName: "jest" },
          { name: "Bitbucket", iconName: "bitbucket" },
          { name: "RxJs", iconName: "rxjs" },
        ],
        image: "home-background.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat.`,
        runTo: ".",
        codeTo: ".",
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
          { name: "Sass", iconName: "sass" },
          { name: "JavaScript", iconName: "js" },
          { name: "TypeScript", iconName: "ts" },
          { name: "Vue3", iconName: "vue" },
          { name: "Jest", iconName: "jest" },
          { name: "Bitbucket", iconName: "bitbucket" },
          { name: "RxJs", iconName: "rxjs" },
        ],
        image: "home-background.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat.`,
        runTo: ".",
        codeTo: ".",
      },
    },
  ],
  subProjects: [
    {
      id: 1,
      title: "Project name",
      image: "home-background.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      runTo:
        "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
    },
    {
      id: 2,
      title: "Project name",
      image: "home-background.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      runTo:
        "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
    },
    {
      id: 3,
      title: "Project name",
      image: "home-background.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      runTo:
        "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
    },
    {
      id: 4,
      title: "Project name",
      image: "home-background.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      runTo:
        "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
    },
  ],
};

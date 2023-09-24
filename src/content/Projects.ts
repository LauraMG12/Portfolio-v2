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
  inProgress?: boolean;
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
          { name: "Sass", iconName: "sass" },
          { name: "TypeScript", iconName: "ts" },
          { name: "Vue3", iconName: "vue" },
          { name: "Jest", iconName: "jest" },
          { name: "Cypress", iconName: "cypress" },
          { name: "RxJs", iconName: "rxjs" },
          { name: "GraphQL", iconName: "graphql" },
          { name: "StoryBook", iconName: "storybook" },
        ],
        image: "trip-planner.webp",
        description: `As a key member of Sembo Trip Planner team, I contributed to develop a groundbreaking travel tool that allows users to effortlessly curate complete travel experiences integrating accommodation, transportation, and activities. It has also elevated the travel experience itself, making it more enjoyable and accessible to everyone.`,
        runTo:
          "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
      },
    },
    // {
    //   id: 2,
    //   color: "pink",
    //   info: {
    //     title: "Project title",
    //     technologies: [
    //       { name: "HTML", iconName: "html" },
    //       { name: "CSS3", iconName: "css" },
    //       { name: "Sass", iconName: "sass" },
    //       { name: "JavaScript", iconName: "js" },
    //       { name: "TypeScript", iconName: "ts" },
    //       { name: "Vue3", iconName: "vue" },
    //       { name: "Jest", iconName: "jest" },
    //       { name: "Bitbucket", iconName: "bitbucket" },
    //       { name: "RxJs", iconName: "rxjs" },
    //     ],
    //     image: "home-background.webp",
    //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //      aliquip ex ea commodo consequat.`,
    //     runTo: ".",
    //     codeTo: ".",
    //   },
    // },
    // {
    //   id: 3,
    //   color: "orange",
    //   info: {
    //     title: "Project title",
    //     technologies: [
    //       { name: "HTML", iconName: "html" },
    //       { name: "CSS3", iconName: "css" },
    //       { name: "Sass", iconName: "sass" },
    //       { name: "JavaScript", iconName: "js" },
    //       { name: "TypeScript", iconName: "ts" },
    //       { name: "Vue3", iconName: "vue" },
    //       { name: "Jest", iconName: "jest" },
    //       { name: "Bitbucket", iconName: "bitbucket" },
    //       { name: "RxJs", iconName: "rxjs" },
    //     ],
    //     image: "home-background.webp",
    //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //      aliquip ex ea commodo consequat.`,
    //     runTo: ".",
    //     codeTo: ".",
    //   },
    // },
  ],
  subProjects: [
    {
      id: 1,
      title: "To do list",
      image: "todo.webp",
      description: `Responsive Todo List application, developed using Vue.js and TypeScript`,
      runTo: "https://github.com/LauraMG12/Todo",
    },
    {
      id: 2,
      title: "Users table",
      image: "users-list.webp",
      description: `Project where data has been fetched from API to improve how to handle the data`,
      runTo: "https://github.com/LauraMG12/users-table",
    },
    {
      id: 3,
      title: "Online store",
      image: "home-background.webp",
      description: `Project part of the Udemy course
      NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)`,
      runTo: "",
      inProgress: true,
    },
    {
      id: 4,
      title: "Recipes app",
      image: "home-background.webp",
      description: `Recipes app`,
      runTo: "https://github.com/LauraMG12/AutoShopping",
      inProgress: true,
    },
  ],
};

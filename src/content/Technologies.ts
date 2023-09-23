import { IconType } from "@/components/shared/SvgIcon/SvgIconHelper";
import { GradientType } from "../state/AppState";

interface TechnologiesSectionInfo {
  sectionTitle: string;
  technologies: GroupedTechnologies[];
}
export interface GroupedTechnologies {
  color: GradientType;
  group: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  iconName: IconType;
}

export const technologies: TechnologiesSectionInfo = {
  sectionTitle: "Technologies",
  //TODO: complete technologies and add needed icons
  technologies: [
    {
      color: "blue",
      group: "Front end - Delivery",
      technologies: [
        {
          name: "HTML",
          iconName: "html",
        },
        {
          name: "CSS",
          iconName: "css",
        },
        { name: "Sass", iconName: "sass" },
        { name: "JavaScript", iconName: "js" },
        { name: "TypeScript", iconName: "ts" },
        { name: "Vue3", iconName: "vue" },
        { name: "Jest", iconName: "jest" },
        { name: "Cypress", iconName: "cypress" },
        { name: "GraphQl", iconName: "graphql" },
        { name: "RxJs", iconName: "rxjs" },
        { name: "StoryBook", iconName: "storybook" },
      ],
    },
    {
      color: "pink",
      group: "Front end - Discovery",
      technologies: [
        {
          name: "HTML5",
          iconName: "html",
        },
        {
          name: "CSS3",
          iconName: "css",
        },
      ],
    },
    {
      color: "orange",
      group: "Others",
      technologies: [{ name: "Bitbucket", iconName: "bitbucket" }],
    },
  ],
};

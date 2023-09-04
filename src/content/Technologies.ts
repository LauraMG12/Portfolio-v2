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
  technologies: [
    {
      color: "blue",
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
        { name: "Sass", iconName: "sass" },
        { name: "JavaScript", iconName: "js" },
        { name: "TypeScript", iconName: "ts" },
        { name: "Vue3", iconName: "vue" },
        { name: "Jest", iconName: "jest" },
        { name: "Bitbucket", iconName: "bitbucket" },
        { name: "RxJs", iconName: "rxjs" },
      ],
    },
    {
      color: "pink",
      group: "Front end - Delivery",
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
      technologies: [
        {
          name: "HTML",
          iconName: "html",
        },
        {
          name: "CSS3",
          iconName: "css",
        },
      ],
    },
  ],
};

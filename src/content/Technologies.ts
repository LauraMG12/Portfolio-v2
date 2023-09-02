import { IconType } from "@/components/shared/SvgIcon/SvgIconHelper";

interface TechnologiesSectionInfo {
  sectionTitle: string;
  technologies: GroupedTechnologies[];
}
export interface GroupedTechnologies {
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

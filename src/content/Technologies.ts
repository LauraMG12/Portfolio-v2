import { IconType } from "@/components/shared/SvgIcon/SvgIconHelper";
import { GradientType } from "@/state/AppState";

interface TechnologiesSectionInfo {
  sectionTitle: string;
  technologies: GroupedTechnologies[];
}
interface GroupedTechnologies {
  group: string;
  technologies: Technology[];
  color: GradientType;
}

interface Technology {
  name: string;
  iconName: IconType;
}

export const technologies: TechnologiesSectionInfo = {
  sectionTitle: "Technologies",
  technologies: [
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
      color: "blue",
    },
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
      ],
      color: "pink",
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
      color: "orange",
    },
  ],
};

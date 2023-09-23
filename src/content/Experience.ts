import { GradientType } from "../state/AppState";

interface ExperienceSectionInfo {
  sectionTitle: string;
  experiences: GroupedExperiences[];
}
export interface GroupedExperiences {
  color: GradientType;
  info: ExperienceInfo;
}

interface ExperienceInfo {
  companyName: string;
  companyLogo: string;
  period: string;
  description: string;
  details: string[];
}

export const experience: ExperienceSectionInfo = {
  //TODO: complete with CV information
  sectionTitle: "Experience",
  experiences: [
    {
      color: "blue",
      info: {
        companyName: "Sembo",
        companyLogo: "sembo.png",
        period: "August 2022 - currently",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        details: ["example", "example", "example"],
      },
    },
    {
      color: "pink",
      info: {
        companyName: "Courses and projects",
        companyLogo: "udemy.png",
        period: "August 2021 - currently",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        details: ["example", "example", "example"],
      },
    },
    {
      color: "orange",

      info: {
        companyName: "Jan Choueiri - Management & consulting",
        companyLogo: "jc-mc.png",
        period: "April 2022 - August 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        details: ["example", "example", "example"],
      },
    },
  ],
};

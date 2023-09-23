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
  companyLogo: string[];
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
        companyLogo: ["sembo.png"],
        period: "August 2022 - currently",
        description: `Travel industry`,
        details: ["example", "example", "example"],
      },
    },
    {
      color: "pink",
      info: {
        companyName: "Courses and projects",
        companyLogo: ["udemy.png", "frontend-masters.png"],
        period: "August 2021 - currently",
        description: `Autodidact`,
        details: ["example", "example", "example"],
      },
    },
    {
      color: "orange",

      info: {
        companyName: "Jan Choueiri - Management & consulting",
        companyLogo: ["jc-mc.png"],
        period: "April 2022 - August 2022",
        description: `Consultancy`,
        details: ["example", "example", "example"],
      },
    },
  ],
};

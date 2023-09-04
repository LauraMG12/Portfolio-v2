import { GradientType } from "../state/AppState";

interface ExperienceSectionInfo {
  sectionTitle: string;
  experiences: GroupedExperiences[];
}
export interface GroupedExperiences {
  color: GradientType;
  group: string;
  info: [];
}

export const experience: ExperienceSectionInfo = {
  sectionTitle: "Experience",
  experiences: [
    {
      color: "blue",
      group: "Sembo",
      info: [],
    },
    {
      color: "pink",
      group: "Jan Choueiri - Management & consulting",
      info: [],
    },
    {
      color: "orange",
      group: "Self learning",
      info: [],
    },
  ],
};

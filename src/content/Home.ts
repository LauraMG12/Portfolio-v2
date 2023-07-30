import { GradientType } from "../state/AppState";

interface AppHighlights {
  text: string;
  color: GradientType;
}

export const highlights: AppHighlights[] = [
  { text: "Passionate", color: "blue" },
  { text: "Creative", color: "pink" },
  { text: "Methodical", color: "orange" },
];

import { GradientType } from "../state/AppState";

interface HomeInfo {
  name: string;
  position: string;
  linkedIn: string;
  contact: string;
}
interface AppHighlights {
  text: string;
  color: GradientType;
}

export const highlights: AppHighlights[] = [
  { text: "Passionate", color: "blue" },
  { text: "Persistent", color: "pink" },
  { text: "Methodical", color: "orange" },
];

export const home: HomeInfo = {
  name: "Laura Mañogil González",
  position: "front-end developer",
  linkedIn: "LinkedIn",
  contact: "Contact",
};

interface SectionsInfo {
  id: number;
  title: string;
  goTo: string;
  isSelected: boolean;
}

export const sections: SectionsInfo[] = [
  { id: 0, title: "Projects", goTo: "projectsSection", isSelected: false },
  {
    id: 1,
    title: "Technologies",
    goTo: "technologiesSection",
    isSelected: false,
  },
  { id: 2, title: "About", goTo: "aboutSection", isSelected: false },
  { id: 3, title: "Contact", goTo: "contactSection", isSelected: false },
];

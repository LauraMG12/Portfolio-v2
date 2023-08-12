interface SectionsInfo {
  id: number;
  title: string;
  isSelected: boolean;
}

export const sections: SectionsInfo[] = [
  { id: 0, title: "Projects", isSelected: false },
  { id: 1, title: "Technologies", isSelected: false },
  { id: 2, title: "About", isSelected: false },
  { id: 3, title: "Contact", isSelected: false },
];

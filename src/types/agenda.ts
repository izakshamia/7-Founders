
export interface AgendaItemType {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
  iconName?: string; // Change from ReactNode to string icon name
}

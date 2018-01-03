export interface SidebarItem {
  icon?: string;
  content: string;
  href?: string;
  target?: string;
  to?: string | Location;
}

export interface SidebarMenu {
  icon?: string;
  content: string;
  itemsSource: SidebarMenuItem[];
}

export interface SidebarMenuItem {
  content: string;
  href?: string;
  target?: string;
  to?: string | Location;
}

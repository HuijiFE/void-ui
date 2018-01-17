export interface ContentTableItem {
  id: string;
  label: string;
  children?: ContentTableItem[];
}

export type TableCell = string | number;
export type TextAlign = 'left' | 'center' | 'right';
export type sortFunction = (a: TableCell, b: TableCell) => number;
export interface TableRow {
  [key: string]: TableCell;
}

export interface TableHeaderItem {
  content: string;
  key: string;
  sortable?: boolean;
  formatter?: (cell: TableCell, row?: TableRow, headerItem?: TableHeaderItem) => string;
  sort?: sortFunction[];
  // compareLocales?: string | string[];
  // compareOptions?: Intl.CollatorOptions;

  [prop: string]: any;
}

export enum SortEventName {
  normal,
  asc,
  desc,
}

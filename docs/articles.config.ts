export interface DocConfig {
  name: string;
  path?: string;
  fileName?: string;
  children?: DocConfig[];
}

export const enUS: DocConfig[] = [
  {
    name: 'Documentation',
    path: '',
    fileName: 'documentation',
  },
  {
    name: 'Basic Controls',
    children: [
      {
        name: 'flexbox',
        path: 'flexbox',
        fileName: 'flexbox',
      },
    ],
  },
];

export const zhCN: DocConfig[] = [
  {
    name: '文档',
    path: '',
    fileName: 'documentation',
  },
  {
    name: '基础组件',
    children: [
      {
        name: 'flexbox 弹性盒子',
        path: 'flexbox',
        fileName: 'flexbox',
      },
    ],
  },
];

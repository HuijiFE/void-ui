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
    name: '基本',
    children: [
      {
        name: 'button 按钮',
        path: 'button',
        fileName: 'basic/button',
      },
    ],
  },
  {
    name: '布局',
    children: [
      {
        name: 'flexbox 弹性盒子',
        path: 'flexbox',
        fileName: 'layout/flexbox',
      },
    ],
  },
  {
    name: '表单',
    children: [
      {
        name: 'toggle 开关',
        path: 'radio',
        fileName: 'form/toggle',
      },
      {
        name: 'radio 单选框',
        path: 'toggle',
        fileName: 'form/radio',
      },
    ],
  },
];

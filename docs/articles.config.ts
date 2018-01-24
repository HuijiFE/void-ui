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
        name: 'typography 排版',
        path: 'typography',
        fileName: 'basic/typography',
      },
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
        name: 'common layout 通用布局',
        path: 'common',
        fileName: 'layout/common',
      },
      {
        name: 'flexbox 弹性盒子',
        path: 'flexbox',
        fileName: 'layout/flexbox',
      },
    ],
  },
  {
    name: '样式',
    children: [
      {
        name: 'Acrylic 亚克力',
        path: 'acrylic',
        fileName: 'style/acrylic',
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
      {
        name: 'Tag 标签',
        path: 'tag',
        fileName: 'form/tag',
      },
    ],
  },
  {
    name: 'Navigation 导航',
    children: [
      {
        name: 'Tabs 标签页',
        path: 'tabs',
        fileName: 'navigation/tabs',
      },
      {
        name: 'NavTabs 标签页',
        path: 'navTabs',
        fileName: 'navigation/navTabs',
      },
      {
        name: 'MadeTabs 定制标签页',
        path: 'madeTabs',
        fileName: 'navigation/madeTabs',
      },
      {
        name: 'Subnav 导航',
        path: 'subnav',
        fileName: 'navigation/subnav',
      },
      {
        name: 'Collapse 折叠面板',
        path: 'collapse',
        fileName: 'navigation/collapse',
      },
      {
        name: 'Bread Crumb 面包屑',
        path: 'breadCurmb',
        fileName: 'navigation/breadCrumb',
      },
      {
        name: 'Content Table 内容目录',
        path: 'contentTable',
        fileName: 'navigation/contentTable',
      },
    ],
  },
  {
    name: '数据集',
    path: 'data',
    children: [
      {
        name: 'table 表格',
        path: 'table',
        fileName: 'data/dataTable',
      },
    ],
  },
  {
    name: '其他',
    children: [
      {
        name: '分数',
        path: 'score',
        fileName: 'other/score',
      },
      {
        name: 'processBar 进度条',
        path: 'processBar',
        fileName: 'other/processBar',
      },
      {
        name: 'note 提示',
        path: 'note',
        fileName: 'other/note',
      },
      {
        name: 'card 卡片',
        path: 'card',
        fileName: 'other/card',
      },
      {
        name: 'linkList 链接',
        path: 'linkList',
        fileName: 'other/linkList',
      },
      {
        name: 'defintion list 定义表',
        path: 'defintion list',
        fileName: 'other/definition',
      },
      {
        name: 'dataCard 数据卡片',
        path: 'dataCard',
        fileName: 'other/dataCard',
      },
      {
        name: 'avatar 头像',
        path: 'avatar',
        fileName: 'other/avatar',
      },
      {
        name: 'loading 加载',
        path: 'loading',
        fileName: 'other/loading',
      },
      {
        name: 'alert 弹出框',
        path: 'alert',
        fileName: 'other/alert',
      },
    ],
  },
];

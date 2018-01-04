/**
 * This file makes sure typescript understands how to import those none-ts file as modules.
 * Must be placed in /src/ directory.
 */

declare module '*.vue' {
  import Vue from 'vue';
  export * from '*.vue';
  export default Vue;
}
declare module '*.md' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.css' {
  const content: any;
  export default content;
}
declare module '*.less' {
  const content: any;
  export default content;
}
declare module '*.sass' {
  const content: any;
  export default content;
}
declare module '*.scss' {
  const content: any;
  export default content;
}
declare module '*.stylus' {
  const content: any;
  export default content;
}
declare module '*.styl' {
  const content: any;
  export default content;
}

declare type ClassNames = Array<string | any>;

declare interface StyleObject {
  [key: string]: string | number;
}

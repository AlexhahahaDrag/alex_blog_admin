/// <reference types="vite/client" />

declare module "particles.vue3";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module "@baikbingo/cache" {
//   const Cache: any;
//   export default Cache;
//   export function createCache(): any;
// }

declare module "mockjs";

interface Window {
  scheduler: any;
  Scheduler: any;
  dhtmlXTooltip: any;
}

declare module '*.json' {
  const obj: Record<string | number, any>;
  export default obj;
}
declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'ant-design-vue/es/locale/*' {
  import { Locale } from 'ant-design-vue/es/locale-provider';
  const locale: Locale & { readonly [key: string]: string };
  export default locale;
}

declare module 'moment/locale/*' {
  import { LocaleSpecification } from 'moment';
  const locale: LocaleSpecification & { readonly [key: string]: string };
  export default locale;
}
import type { App, Plugin } from 'vue';

export type WithInstall<T> = T & Plugin & { name: string };
export const withInstall = <T>(comp: T) => {
  (comp as WithInstall<T>).install = (app: App) => {
    app.component((comp as WithInstall<T>).name, comp);
  };
  return comp as WithInstall<T>;
};

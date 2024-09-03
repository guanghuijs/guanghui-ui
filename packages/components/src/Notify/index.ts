import { createVNode, render } from 'vue';

import Notify from './src/index.vue';

export const notify = (options: {
  message?: string;
  wait?: number;
  bgColor?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger';
  position?: 'top' | 'bottom';
}) => {
  console.log(111);
  document.querySelector('#notify-cont')?.remove();
  const box = document.createElement('div');
  box.id = 'notify-cont';
  const instance = createVNode(Notify, options);
  render(instance, box);
  (document.querySelector('#app') as HTMLBodyElement).appendChild(box);
};

export const hiddenNotify = () => {
  document.querySelector('#notify-cont')?.remove();
};

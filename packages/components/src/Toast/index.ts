import { createVNode, render } from 'vue';

import Toast from './src/index.vue';

export const toast = (options: {
  message: string;
  icon?: string;
  wait?: number;
}) => {
  document.querySelector('#toast-cont')?.remove();
  const box = document.createElement('div');
  box.id = 'toast-cont';
  const instance = createVNode(Toast, options);
  render(instance, box);
  (document.querySelector('#app') as HTMLBodyElement).appendChild(box);
};

export const hiddenToast = () => {
  document.querySelector('#toast-cont')?.remove();
};

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeMetaList } from './routeMetaMap';

import routes from '~pages';
const metaRoutes = routes.map((item) => {
  return Object.assign(item, { meta: routeMetaList[item.name as string] });
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/intro',
    },
    ...metaRoutes,
  ],
});

export { metaRoutes };
export default router;

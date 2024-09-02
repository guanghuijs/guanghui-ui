import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.less';
import router from '@/router';
import 'guanghui-ui/lib/style.css';
import ghUI from 'guanghui-ui';

const app = createApp(App);
app.use(ghUI).use(router);
app.mount('#app');

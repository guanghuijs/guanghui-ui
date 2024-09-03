import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.less';
import router from '@/router';
import ghUI from '@ghui/components';

const app = createApp(App);
app.use(ghUI).use(router);
app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import store from './store';
// import './samples/node-api'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
  });

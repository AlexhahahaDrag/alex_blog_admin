import {
    createApp
} from 'vue';
import App from './App.vue';
//引入router
import router from "./router";
//引入ant-design-vue样式
import 'ant-design-vue/dist/antd.less';
import Particles from 'particles.vue3';
 
createApp(App).use(router).use(Particles).mount('#app');
import {
    createApp
} from 'vue';
import App from './App.vue';
//引入router
import router from "./router";
//引入ant-design-vue样式
import 'ant-design-vue/dist/antd.less';

createApp(App).use(router).mount('#app');
import {
    createApp
} from 'vue';
import App from './App.vue';
//引入router
import router from "./router";
//引入ant-design-vue组件
import {
    Form,
    Button,
    Input,
} from 'ant-design-vue';
//引入ant-design-vue样式
import 'ant-design-vue/dist/antd.less';

import Particles from "particles.vue3";

createApp(App).use(router).use(Form).use(Button).use(Input).use(Particles).mount('#app');
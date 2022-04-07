import {
    createApp
} from 'vue';
import App from './App.vue';
//引入router
import router from "./router";
//引入ant-design-vue样式
import 'ant-design-vue/dist/antd.less';
import Particles from 'particles.vue3';
import store from 'vuex'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(Particles).use(store).mount('#app');
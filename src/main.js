import {
    createApp
} from 'vue';
import App from './App.vue';
import router from "./router";
import {
    Form,
    Button,
    Input,
} from 'ant-design-vue';

createApp(App).use(router).use(Form).use(Button).use(Input).mount('#app');
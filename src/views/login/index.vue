<template>
  <a-form
    ref="formRef"
    :model="loginForm"
    class="login-form"
    :rules="loginRules"
  >
    <h3 class="title">蘑菇博客后台管理系统</h3>
    <a-form-item name="username">
      <a-input
        v-model:value="loginForm.username"
        placeholder="请输入账号或手机号"
        autocomplete="on"
      />
    </a-form-item>
    <a-form-item name="password">
      <a-input
        v-model:value="loginForm.password"
        type="password"
        placeholder="请输入密码"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onSubmit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, UnwrapRef, ref } from "vue";
import { login, LoginParams } from "@a/login.ts";
import { notification } from "ant-design-vue";
import {
  ValidateErrorEntity,
} from "ant-design-vue/es/form/interface";

interface loginForm {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const loginForm: UnwrapRef<loginForm> = reactive({
      username: "",
      password: "",
    });
    const loginRules = {
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 5, message: "密码最少五位", trigger: "blur" },
      ],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          let param: LoginParams = {
            type: "account",
            username: loginForm.username,
            password: loginForm.password,
          };
          login(param).then((res) => {
            // notification
            notification.error({
              message: "Forbidden",
              description: (res && res.message) || "login fail",
            });
          });
        })
        .catch((error: ValidateErrorEntity<loginForm>) => {
          console.log("error", error);
        });
    };
    return {
      formRef,
      loginForm,
      onSubmit,
      loginRules,
    };
  },
});
</script>
<style scoped>
</style>
<template>
  <div class="login-container">
    <a-form
      ref="formRef"
      :model="loginForm"
      class="login-form"
      :rules="loginRules"
    >
      <h3 class="title">alex博客后台管理系统</h3>
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
        <a-button type="primary" @click="onSubmit" style="width:100%;">登录</a-button>
      </a-form-item>
    </a-form>
    <!--引入粒子特效-->
    <!-- <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles> -->
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, UnwrapRef, ref } from "vue";
import { login, LoginParams } from "@a/login.ts";
import { notification } from "ant-design-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";

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

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .a-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .a-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
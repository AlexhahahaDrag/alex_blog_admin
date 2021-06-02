<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name">
      <a-input v-model:value="formState.username" />
    </a-form-item>
    <a-form-item label="Activity password">
      <a-input v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw, UnwrapRef } from "vue";
import { login, LoginParams } from "@a/login.ts";
import { notification } from "ant-design-vue";

interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });
    const onSubmit = () => {
      console.log("submit!", toRaw(formState));
      let param: LoginParams = {
        type: "account",
        username: formState.username,
        password: formState.password,
      };
      login(param).then((res) => {
        // notification
        notification.error({
          message: "Forbidden",
          description: (res && res.message) || "login fail",
        });
      });
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
</script>
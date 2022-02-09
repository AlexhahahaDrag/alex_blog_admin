<template>
  <!-- <a-breadcrumb>
    <a-breadcrumb-item href="">
      <a-icon type="home" />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <a-icon type="user" />
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item> Application </a-breadcrumb-item>
  </a-breadcrumb> -->

  <a-dropdown class="avatar-container" :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="aboutMe" @click="aboutMe"> 关于我 </a-menu-item>
        <a-menu-item key="showLog" @click="showLog"> 更新日志 </a-menu-item>
        <a-menu-item key="logout" @click="logout">退出</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const aboutMe = function () {
      console.log("aboutMe");
    };
    const showLog = function () {
      console.log("showLog");
    };
    const logout = function () {
      console.log("logout");
    };
    return {
      aboutMe,
      showLog,
      logout,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
  }
  .avatar-container {
    height: 50px;
    margin-right: 30px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

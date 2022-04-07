<template>
  <a-menu class="navbar">
    <a-breadcrumb :routes="routes" class="hamburger-container">
      <template #itemRender="{ route, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.meta && route.meta.title }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('')}`">
          {{ route.meta && route.meta.title }}
        </router-link>
      </template>
    </a-breadcrumb>
    {{ $route.path }}
    <div class="right-menu">
      <a-tooltip placement="bottom" color="dark">
        <template #title>
          <span>Gitee源码</span>
        </template>
        <git></git>
      </a-tooltip>
      <a-tooltip placement="bottom" color="green">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Bottom</a-button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>文档地址</span>
        </template>
        <a-button>文档地址</a-button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>全屏</span>
        </template>
        <a-button>全屏</a-button>
      </a-tooltip>
      <a-dropdown class="avatar-container" :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          Click me
          <!-- <DownOutlined /> -->
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="aboutMe" @click="aboutMe"> 关于我 </a-menu-item>
            <a-menu-item key="showLog" @click="showLog"> 更新日志 </a-menu-item>
            <a-menu-item key="logout" @click="logout">退出</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MenuDataItem } from "@/router/typing";
import git from "@/views/alexblog/git/index.vue";

const aboutMe = function () {
  console.log("aboutMe");
};
const showLog = function () {
  console.log("showLog");
};
const logout = function () {
  console.log("logout");
};

interface Props {
  routes: MenuDataItem[];
}
const props = withDefaults(defineProps<Props>(), {
  routes: () => [],
});

const routes = ref<MenuDataItem[]>(props.routes);
let basePath = "";
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international {
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
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
}
</style>

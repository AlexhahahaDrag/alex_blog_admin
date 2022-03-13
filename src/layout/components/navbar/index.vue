<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
    :default-active="activeMenu"
  >
    <div
      v-for="route in router"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    >
      <a-sub-menu>
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>{{ route.meta ? route.meta.title : "未知" }}</template>
        <div v-if="route.children">
          <a-menu-item
            v-for="subRoute in route.children"
            :key="subRoute.path"
            :item="subRoute"
            :base-path="subRoute.path"
          >
            {{ subRoute.meta.title }}
          </a-menu-item>
        </div>
      </a-sub-menu>
    </div>
  </a-menu>
</template>
<script setup lang="ts">
import { ref, watch, computed, emitter } from "vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { algorithm } from "@/utils/algorithm/index";
import mitt from 'mitt';

const router = useRouter().options.routes;
const routes = computed(() => algorithm.increaseIndexes(router));
const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const handleClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};
const route = useRoute();
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const titleClick = (e: Event) => {
  console.log("titleClick", e);
  // let parentPath = "";
  //     let parentPathIndex = indexPath.lastIndexOf("/");
  //     if (parentPathIndex > 0) {
  //       parentPath = indexPath.slice(0, parentPathIndex);
  //     }
      // 找到当前路由的信息
      function findCurrentRoute(routes) {
        return routes.map((item, key) => {
          // if (item.path === indexPath) {
          //   // dynamicRouteTags(indexPath, parentPath, item);
          // } else {
            if (item.children) findCurrentRoute(item.children);
          // }
        });
        return;
      }
      findCurrentRoute(algorithm.increaseIndexes(router));
      mitt().emit("changLayoutRoute", e.key);
};

watch(
  () => openKeys,
  (val) => {
    console.log("openKeys", val);
  }
);
</script>


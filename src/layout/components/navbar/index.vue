<template>
  <div>
    <a-menu id="menu" mode="inline" theme="dark">
      <Menu :routes="routes"></Menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { algorithm } from "@/utils/algorithm/index.ts";
import Menu from "./menu.vue";
import { computed } from "vue";

const router = useRouter().options.routes;
const routes = computed(() => algorithm.increaseIndexes(router));
</script>

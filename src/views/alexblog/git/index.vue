<template>
  <svgIcon
    name="gitee"
    @click.native="goto"
    style="width: 1.5em; height: 1.5em; font-size: 18px; cursor: pointer"
    color="hotpink"
  ></svgIcon>
</template>

<script setup>
import svgIcon from "@/views/common/svgIcon.vue";
import Icon from "@ant-design/icons-vue";
const url = "https://github.com/AlexhahahaDrag/alex_blog.git";
const goto = () => {
  window.open(url);
};
</script>

<style></style>

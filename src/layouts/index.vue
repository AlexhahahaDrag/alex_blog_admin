<template>
  <water-mark content="alex_blog" :disabled="true">
        <left-menu-layout key="leftmenu-layout" v-if="layout === 'left'">
            <slot />
        </left-menu-layout>
        <basic-layout key="basic-layout" v-else><slot /></basic-layout>
    </water-mark>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GlobalLayout',
    setup() {
        return {
            
        };
    }
});
</script>

<style>

</style>
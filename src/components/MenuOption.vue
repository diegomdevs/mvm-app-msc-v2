<script setup lang="ts">
import { reactive, toRefs } from "vue";
import RouteLink from "./RouteLink.vue";
interface MenuOptionProps {
  menuOptionName: string;
  menuOptionUrl: string;
}
const props = defineProps<MenuOptionProps>();
const { menuOptionName, menuOptionUrl } = toRefs(props);
const menuOption = reactive({
  className: "menuOption",
});
</script>
<template>
  <RouteLink
    :link-name="menuOptionName"
    :link-url="menuOptionUrl"
    :class="menuOption.className"
  />
</template>
<style scoped>
.menuOption {
  border-bottom: solid white 1px;
}
</style>

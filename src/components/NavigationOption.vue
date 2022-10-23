<script setup lang="ts">
import { reactive, toRefs } from "vue";
import RouteLink from "./RouteLink.vue";
interface INavigationOptionsProps {
  navigationOptionName: string;
  navigationOptionUrl: string;
}
const props = defineProps<INavigationOptionsProps>();
const registrationOption = reactive({
  className: "navigation-menu__option",
});
const { navigationOptionName, navigationOptionUrl } = toRefs(props);
</script>
<template>
  <RouteLink
    :class="registrationOption.className"
    :link-name="navigationOptionName"
    :link-url="navigationOptionUrl"
  />
</template>
<style scoped>
.navigation-menu__option {
  width: 150px;
  height: 50px;
  border: white solid 2px;
  border-radius: 15px;
  background-color: var(--primary-blue);
}
</style>

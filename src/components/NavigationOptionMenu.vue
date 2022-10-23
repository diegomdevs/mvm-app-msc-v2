<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive, toRefs } from "vue";
import NavigationOption from "./NavigationOption.vue";
interface INavigationOptionMenuProps {
  navigationOptionMenuMessage: string;
  navigationOptionMenuOptions: any[];
}
const props = defineProps<INavigationOptionMenuProps>();
const { navigationOptionMenuMessage, navigationOptionMenuOptions } =
  toRefs(props);
const h1 = reactive({
  className: "main-navigation-menu--title",
  message: navigationOptionMenuMessage.value,
});
</script>
<template>
  <h1 :class="h1.className">{{ useToUpperLowerCase(h1.message) }}</h1>
  <NavigationOption
    v-for="navigationOptionMenuOption in navigationOptionMenuOptions"
    :navigationOptionName="navigationOptionMenuOption.name"
    :navigationOptionUrl="navigationOptionMenuOption.url"
    :key="navigationOptionMenuOption.name"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import ImageMVM from "./img/imageMVM.vue";
import MenuOption from "./MenuOption.vue";
const aside = reactive({
  className: "main-menu-container",
});
const mainMenuOptions = ref([
  {
    mainMenuOptionName: "registrar",
    mainMenuOptionUrl: "registration",
  },
  // {
  //   mainMenuOptionName: "consultas",
  //   mainMenuOptionUrl: "queries",
  // },
]);
</script>
<template>
  <aside :class="aside.className">
    <ImageMVM />
    <MenuOption
      v-for="mainMenuOption in mainMenuOptions"
      :menu-option-name="mainMenuOption.mainMenuOptionName"
      :menu-option-url="mainMenuOption.mainMenuOptionUrl"
      :key="mainMenuOption.mainMenuOptionName"
    />
  </aside>
</template>
<style scoped>
aside.main-menu-container {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100px;
  height: 100vh;
  padding-top: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--primary-blue);
}
</style>

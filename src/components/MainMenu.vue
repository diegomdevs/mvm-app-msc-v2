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
    mainMenuOptionUrl: "registrate",
  },
  {
    mainMenuOptionName: "consultas",
    mainMenuOptionUrl: "queries",
  },
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
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100vh;
  background-color: var(--primary-blue);
}
</style>

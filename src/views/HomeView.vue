<script setup lang="ts">
import { reactive } from "vue";
import MainMenu from "../components/MainMenu.vue";
import MainUserInfo from "../components/MainUserInfo.vue";
const main = reactive({
  className: "main-container",
});
</script>
<template>
  <main :class="main.className">
    <MainMenu />
    <MainUserInfo />
  </main>
</template>
<style scoped>
main.main-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}
</style>

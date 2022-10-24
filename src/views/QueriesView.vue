<script setup lang="ts">
import { reactive, ref } from "vue";
import NavigationOptionMenu from "../components/NavigationOptionMenu.vue";
const main = reactive({
  className: "main-container",
});
const navigationOptionMenuMessage = ref("¿qué vas a consultar?");
const navigationOptionMenuOptions = ref([
  { name: "clientes", url: "queries/customers" },
  { name: "Monedas o tasas", url: "queries/currencies/form" },
]);
</script>
<template>
  <main :class="main.className">
    <NavigationOptionMenu
      :navigationOptionMenuMessage="navigationOptionMenuMessage"
      :navigationOptionMenuOptions="navigationOptionMenuOptions"
    />
  </main>
</template>
<style scoped>
main.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  padding-top: 100px;
}
</style>

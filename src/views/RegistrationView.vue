<script setup lang="ts">
import { reactive, ref } from "vue";
import NavigationOptionMenu from "../components/NavigationOptionMenu.vue";
const main = reactive({
  className: "main-container",
});
const navigationOptionMenuMessage = ref("¿qué vas a registrar?");
const navigationOptionMenuOptions = ref([
  { name: "clientes", url: "registration/customers" },
  // { name: "Monedas o tasas", url: "registration/currencies/form" },
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

<script setup lang="ts">
import { reactive, ref } from "vue";
import useToUpperLowerCase from "../logic/use-to-upper-lower-case";
import NavigationOption from "../components/NavigationOption.vue";
const main = reactive({
  className: "main-container",
});
const h1 = reactive({
  className: "main-registration--title",
  message: "¿qué vas a registrar?",
});
const routeLinks = ref([
  { name: "clientes", url: "registration/customers" },
  { name: "Monedas o tasas", url: "registration/currencies/form" },
]);
</script>
<template>
  <main :class="main.className">
    <h1 :class="h1.className">{{ useToUpperLowerCase(h1.message) }}</h1>
    <NavigationOption
      v-for="routeLink in routeLinks"
      :navigationOptionName="routeLink.name"
      :navigationOptionUrl="routeLink.url"
      :key="routeLink.name"
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

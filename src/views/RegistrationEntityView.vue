<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import NavigationOptionMenu from "../components/NavigationOptionMenu.vue";
const router = useRouter();

const registrationEntityOptions: any = reactive({
  currencies: [
    { name: "monedas", url: "currencies/currency" },
    { name: "tasas", url: "currencies/rate" },
  ],
  customers: [
    { name: "padre", url: "customers/parent" },
    { name: "representative", url: "customers/representative" },
    { name: "estudiante", url: "customers/student" },
  ],
});
const entityFormToBeRendered: any = ref(
  router.currentRoute.value.params.entity
);
</script>
<template>
  <main>
    <NavigationOptionMenu
      :navigation-option-menu-options="
        registrationEntityOptions[entityFormToBeRendered]
      "
      :navigation-option-menu-message="'¿qué vas a registrar?'"
    />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  height: 100%;
  width: 100%;
  padding-top: 50px;
}
</style>

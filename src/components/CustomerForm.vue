<script setup lang="ts">
import { reactive } from "vue";
import PersonForm from "./PersonForm.vue";
const customerFormInputs = reactive({
  inputs: {},
});
</script>
<template>
  <form class="customer-form">
    <PersonForm @emitting-person-form-data="(emittedPersonData) => {}" />
  </form>
</template>
<style scoped>
h1 {
  vertical-align: -webkit-baseline-middle;
  text-align: center;
}
</style>

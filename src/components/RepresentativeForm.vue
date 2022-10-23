<script setup lang="ts">
import { reactive, ref } from "vue";
import FormInput from "./FormInput.vue";
const form = reactive({
  className: "representative-form",
});
const h1 = reactive({
  className: "representative-form--title",
});
const inputs = ref([
  {
    name: "parent-ci",
    type: "text",
    placeholder: "número de cédula",
  },
]);
const buttons = ref({
  name: "número de cédula",
});
</script>
<template>
  <form :class="form.className">
    <h1 :class="h1.className">
      Para registrar un representante, necesita el número de cédula de identidad
      de un padre ya registrado en el sistema. Si no está registrado puede
      registrarlo en la
      <RouterLink to=""> sección de registro de padres. </RouterLink>
    </h1>
    <FormInput
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeholder"
      :key="input.name"
    />
  </form>
</template>
<style scoped>
form.representative-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  text-align: center;
  width: 100%;
  height: 100%;
}
form.representative-form > h1.representative-form--title {
  height: auto;
  width: 250px;
  font-size: 1.3rem;
  color: var();
  text-decoration: underline;
}
</style>

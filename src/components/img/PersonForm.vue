<script setup lang="ts">
import { ref } from "vue";
import ThingForm from "../ThingForm.vue";
import FormInput from "../FormInput.vue";
const form = {
  className: "personForm",
};
const inputs = ref([
  {
    name: "middleName",
    type: "text",
    placeHolder: "segundo nombre",
  },
  {
    name: "surname",
    type: "text",
    placeHolder: "primer apellido",
  },
  {
    name: "lastName",
    type: "text",
    placeHolder: "segundo apellido",
  },
  {
    name: "sex",
    type: "text",
    placeHolder: "sexo",
  },
]);
</script>
<template>
  <form :class="form.className">
    <ThingForm />
    <FormInput
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeHolder"
      :key="input.name"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import CustomerForm from "./CustomerForm.vue";
import FormInput from "./FormInput.vue";
const form = reactive({
  className: "student-form",
});
const customerType = ref("student");
const inputs = ref([
  {
    name: "birthday",
    type: "date",
    placeholder: "fecha de nacimiento",
  },
  {
    name: "birthplace",
    type: "text",
    placeholder: "lugar de nacimiento",
  },
  {
    name: "municipality",
    type: "text",
    placeholder: "municipio",
  },
  {
    name: "state",
    type: "date",
    placeholder: "estado",
  },
  {
    name: "age",
    type: "text",
    placeholder: "edad",
  },
  {
    name: "degreeOfInstruction",
    type: "text",
    placeholder: "grado de instrucción",
  },
  {
    name: "liveWith",
    type: "text",
    placeholder: "vive con",
  },
  {
    name: "allergies",
    type: "text",
    placeholder: "alergias",
  },
]);
</script>
<template>
  <form :class="form.className">
    <CustomerForm :customer-type="customerType" />
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
form.student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
</style>

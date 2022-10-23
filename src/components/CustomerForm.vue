<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import PersonForm from "./img/PersonForm.vue";
import FormInput from "./FormInput.vue";

interface CustomerFormProps {
  customerType: string;
}
const props = defineProps<CustomerFormProps>();
const { customerType } = toRefs(props);
const customersTypes: any = {
  parent: "padre",
  representative: "representante",
  student: "estudiante",
};
const form = reactive({
  className: "customer-form",
});
const inputs = ref([
  // {
  //   name: `${customerType.value}-photo`,
  //   type: "image",
  //   placeholder: `${customersTypes[customerType.value]}`,
  // },
  {
    name: "ci",
    type: "text",
    placeholder: "cédula de identidad",
  },
  {
    name: "degreeOfInstruction",
    type: "text",
    placeholder: "grado de instrucción",
  },
]);
</script>
<template>
  <form :class="form.className">
    <h1>Datos del {{ customersTypes[customerType] }}</h1>
    <PersonForm />
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
h1 {
  vertical-align: -webkit-baseline-middle;
  text-align: center;
}
</style>

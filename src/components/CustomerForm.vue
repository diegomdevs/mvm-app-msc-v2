<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import PersonForm from "./PersonForm.vue";
import FormInput from "./FormInput.vue";

interface CustomerFormProps {
  customerType: string;
  inputValues: any[];
}
const props = defineProps<CustomerFormProps>();
const { customerType, inputValues } = toRefs(props);
const customersTypes: any = {
  parent: "padre",
  representative: "representante",
  student: "estudiante",
};
const form = reactive({
  className: "customer-form",
});
const customerInputValues = ref(
  inputValues.value.filter(
    (input: any) => input.name === "ci" || input.name === "degreeOfInstruction"
  )
);
const personInputsValues = ref(
  inputValues.value.filter(
    (input: any) => input.name !== "ci" || input.name !== "degreeOfInstruction"
  )
);
const customerInputs = ref([
  // {
  //   name: `${customerType.value}-photo`,
  //   type: "image",
  //   placeholder: `${customersTypes[customerType.value]}`,
  // },
  {
    name: "ci",
    type: "text",
    placeholder: "cédula de identidad",
    value: customerInputValues.value[0].value,
  },
  {
    name: "degreeOfInstruction",
    type: "text",
    placeholder: "grado de instrucción",
    value: customerInputValues.value[1].value,
  },
]);
</script>
<template>
  <form :class="form.className">
    <h1>Datos del {{ customersTypes[customerType] }}</h1>
    <PersonForm
      v-model="personInputsValues"
      :input-values="personInputsValues"
    />
    <FormInput
      v-for="input in customerInputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeholder"
      :input-value="input.value"
      v-model="input.value"
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

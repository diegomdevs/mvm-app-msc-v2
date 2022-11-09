<script setup lang="ts">
import { reactive } from "vue";
import FormInput from "./FormInput.vue";

const representativeFormInputs = reactive({
  inputs: {
    ci: {
      name: "ci",
      type: "text",
      placeholder: "cédula de identidad ",
      value: "",
    },
  },
});
const representativeFormData: {
  inputs: {
    [key: string]: {
      name: string;
      value: string | number | Date | boolean;
    };
  };
} = reactive({
  inputs: {},
});
const emits = defineEmits<{
  (
    e: "emittingFormData",
    emittedRepresentativeFormData: {
      inputs: {
        [key: string]: {
          name: string;
          value: string | number | Date | boolean;
        };
      };
    }
  ): void;
}>();
</script>
<template>
  <form class="representative-form">
    <h1>
      Para registrar un representante necesita el número de cédula de identidad
      de un padre ya registrado en el sistema. Si no está registrado puede
      registrarlo en la
      <RouterLink to=""> sección de registro de padres. </RouterLink>
    </h1>
    <FormInput
      v-for="representativeFormInput in representativeFormInputs.inputs"
      :name="representativeFormInput.name"
      :type="representativeFormInput.type"
      :placeholder="representativeFormInput.placeholder"
      :value="representativeFormInput.value"
      :key="representativeFormInput.name"
      @emitting-input-data="
        (inputDataToBeEmitted) => {
          representativeFormData.inputs[inputDataToBeEmitted.name] =
            inputDataToBeEmitted;
          emits('emittingFormData', representativeFormData);
        }
      "
    />
  </form>
</template>
<style scoped>
h1 {
  margin-top: 80px;
  display: block;
  text-align: center;
  width: 300px;
  font-size: 1.2rem;
}
form.representative-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

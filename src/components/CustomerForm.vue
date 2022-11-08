<script setup lang="ts">
import { reactive } from "vue";
import FormInput from "./FormInput.vue";
import PersonForm from "./PersonForm.vue";
const customerFormInputs = reactive({
  inputs: {
    ci: {
      name: "ci",
      type: "text",
      placeholder: "cédula de identidad ",
      value: "",
    },
    degreeOfInstruction: {
      name: "degreeOfInstruction",
      type: "text",
      placeholder: "grado de instrucción",
      value: "",
    },
  },
});
const customerFormData: {
  inputs: {
    [key: string]: {
      [key: string]: any;
      name: string;
      value: string | number | boolean | Date;
    };
  };
} = reactive({
  inputs: {},
});
const emits = defineEmits<{
  (
    e: "emittingCustomerFormData",
    emittedCustomerFormData: {
      inputs: {
        [key: string]: {
          [key: string]: any;
          name: string;
          value: string | number | Date | boolean;
        };
      };
    }
  ): void;
}>();
const customerFormUpdater = (emittedPersonFormData: {
  inputs: {
    [key: string]: {
      [key: string]: any;
      name: string;
      value: string | number | boolean | Date;
    };
  };
}) => {
  for (const key in emittedPersonFormData.inputs) {
    customerFormData.inputs[key] = emittedPersonFormData.inputs[key];
  }
  emits("emittingCustomerFormData", customerFormData);
};
</script>
<template>
  <form class="customer-form">
    <PersonForm
      @emitting-person-form-data="
        (emittedPersonData) => {
          customerFormUpdater(emittedPersonData);
        }
      "
    />
    <FormInput
      v-for="customerInput in customerFormInputs.inputs"
      :name="customerInput.name"
      :placeholder="customerInput.placeholder"
      :type="customerInput.type"
      :value="customerInput.value"
      :key="customerInput.name"
      @emitting-input-data="
        (inputDataToBeEmitted) => {
          customerFormData.inputs[inputDataToBeEmitted.name] =
            inputDataToBeEmitted;
          emits('emittingCustomerFormData', customerFormData);
        }
      "
    />
  </form>
</template>
<style scoped>
form.customer-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

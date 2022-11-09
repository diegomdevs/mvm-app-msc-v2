<script setup lang="ts">
import { reactive } from "vue";
import CustomerForm from "./CustomerForm.vue";
import FormInput from "./FormInput.vue";

const adultFormInputs = reactive({
  inputs: {
    address: {
      name: "address",
      type: "text",
      placeholder: "dirrección",
      value: "",
    },
    phoneNumber: {
      name: "phoneNumber",
      type: "text",
      placeholder: "número telefónico",
      value: "",
    },
    job: {
      name: "job",
      type: "text",
      placeholder: "oficio",
      value: "",
    },
  },
});
const adultFormData: {
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
    e: "emittingAdultFormData",
    emittedAdultFormData: {
      inputs: {
        [key: string]: {
          name: string;
          value: string | number | Date | boolean;
        };
      };
    }
  ): void;
}>();
const adultFormDataUpdater = (emittedCustomerFormData: any) => {
  for (const key in emittedCustomerFormData.inputs) {
    adultFormData.inputs[key] = emittedCustomerFormData.inputs[key];
  }
  emits("emittingAdultFormData", adultFormData);
};
</script>
<template>
  <form class="adult-form">
    <CustomerForm
      @emitting-customer-form-data="
        (emittedCustomerData) => {
          adultFormDataUpdater(emittedCustomerData);
        }
      "
    />
    <FormInput
      v-for="adultFormInput in adultFormInputs.inputs"
      :name="adultFormInput.name"
      :type="adultFormInput.type"
      :placeholder="adultFormInput.placeholder"
      :value="adultFormInput.value"
      :key="adultFormInput.value"
      @emitting-input-data="
        (emittedInputData) => {
          adultFormData.inputs[emittedInputData.name] = emittedInputData;
          emits('emittingAdultFormData', adultFormData);
        }
      "
    />
  </form>
</template>
<style scoped>
form.adult-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

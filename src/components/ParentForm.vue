<script setup lang="ts">
import { reactive } from "vue";
import CustomerForm from "./CustomerForm.vue";
import FormInput from "./FormInput.vue";
const parentFormInputs = reactive({
  inputs: {
    isAlive: {
      name: "isAlive",
      type: "checkbox",
      placeholder: "vive?",
      value: "true",
    },
  },
});
const parentFormData: {
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
    e: "emittingParentFormData",
    emittedParentFormData: {
      inputs: {
        [key: string]: {
          name: string;
          value: string | number | Date | boolean;
        };
      };
    }
  ): void;
}>();
const parentFormDataUpdater = (emittedCustomerFormData: {
  inputs: {
    [key: string]: {
      name: string;
      value: string | number | Date | boolean;
    };
  };
}) => {
  for (const key in emittedCustomerFormData.inputs) {
    parentFormData.inputs[key] = emittedCustomerFormData.inputs[key];
    emits("emittingParentFormData", parentFormData);
  }
};
</script>
<template>
  <form class="parent-form">
    <CustomerForm
      @emitting-customer-form-data="
        (emittedCustomerFormData) => {
          parentFormDataUpdater(emittedCustomerFormData);
        }
      "
    />
    <FormInput
      v-for="parentFormInput in parentFormInputs.inputs"
      :name="parentFormInput.name"
      :type="parentFormInput.type"
      :placeholder="parentFormInput.placeholder"
      :value="parentFormInput.value"
      :key="parentFormInput.name"
      @emitting-input-data="
        (inputDataToBeEmitted) => {
          parentFormData.inputs[inputDataToBeEmitted.name] =
            inputDataToBeEmitted;
          emits('emittingParentFormData', parentFormData);
        }
      "
    />
    {{ parentFormData.inputs }}
  </form>
</template>

<style scoped>
form.parent-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
}
</style>

<script setup lang="ts">
import { reactive } from "vue";
import AdultForm from "./AdultForm.vue";
import FormInput from "./FormInput.vue";
const parentFormInputs = reactive({
  inputs: {
    isAlive: {
      name: "isAlive",
      type: "checkbox",
      placeholder: "¿vive?",
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
  inputs: {
    isAlive: {
      name: "isAlive",
      value: "true",
    },
  },
});
const emits = defineEmits<{
  (
    e: "emittingFormData",
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
    emits("emittingFormData", parentFormData);
  }
};
</script>
<template>
  <form class="parent-form">
    <AdultForm
      @emitting-adult-form-data="
        (emittedAdultFormData) => {
          parentFormDataUpdater(emittedAdultFormData);
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
          parentFormData.inputs[inputDataToBeEmitted.name].value =
            !inputDataToBeEmitted.value;
          emits('emittingFormData', parentFormData);
        }
      "
    />
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

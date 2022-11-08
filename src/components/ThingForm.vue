<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive } from "vue";
import FormInput from "./FormInput.vue";
const thingFormInputs = reactive({
  inputs: {
    name: {
      name: "name",
      placeholder: useToUpperLowerCase("nombre"),
      type: "text",
      value: "",
    },
  },
});
const thingFormData: {
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
    e: "emittingThingFormData",
    emittedThingFormData: {
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
</script>

<template>
  <form class="thing-form">
    <FormInput
      v-for="input in thingFormInputs.inputs"
      :name="input.name"
      :placeholder="input.placeholder"
      :type="input.type"
      :value="input.value"
      :key="input.name"
      @emitting-input-data="
        (emittedInputData) => {
          thingFormData.inputs[emittedInputData.name] = emittedInputData;
          emits('emittingThingFormData', thingFormData);
        }
      "
    />
  </form>
</template>
<style scoped>
form.thing-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

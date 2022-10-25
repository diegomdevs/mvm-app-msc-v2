<script setup lang="ts">
import type IFormInputProps from "@/interfaces/IFormInputProps";
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive } from "vue";
import FormInput from "./FormInput.vue";
const thingFormInputs: { inputs: IFormInputProps[] } = reactive({
  inputs: [
    {
      name: "name",
      placeholder: useToUpperLowerCase("nombre"),
      type: "text",
      value: "",
    },
  ],
});
const thingFormInputValuesToBeEmitted: { inputs: IFormInputProps[] } = reactive(
  { inputs: [] }
);
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
      @emitting-value="
        (emittingInput) => (input.value = emittingInput.inputValue)
      "
    />
  </form>
  {{ thingFormInputs.inputs }}
</template>

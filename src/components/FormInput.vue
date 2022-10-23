<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive, toRefs } from "vue";

interface IFormInputProps {
  inputName: string;
  inputType: string;
  inputPlaceholder?: string;
}
interface IInputType extends IFormInputProps {}
interface IInputTypes {
  text: IInputType;
  checkbox: IInputType;
  image: IInputType;
}
const props = defineProps<IFormInputProps>();
const { inputName, inputType, inputPlaceholder } = toRefs(props);
const label = reactive({
  className: "input-container",
});
const inputTypes: IInputTypes | any = reactive({
  text: {
    inputName: inputName.value,
    inputType: inputType.value,
    inputPlaceholder: inputPlaceholder?.value,
  },
  checkbox: {
    inputName: inputName.value,
    inputType: inputType.value,
    inputPlaceholder: inputPlaceholder?.value,
  },
  image: {
    inputName: inputName.value,
    inputType: inputType.value,
    inputPlaceholder: inputPlaceholder?.value,
  },
});
const input: IInputType = reactive(inputTypes[inputType.value]);
</script>
<template>
  <label :class="label.className" :for="input.inputName">
    <span v-if="inputType === 'checkbox'">
      {{ useToUpperLowerCase(input.inputPlaceholder) }}
    </span>
    <input
      :class="input.inputType"
      :type="input.inputType"
      :placeholder="useToUpperLowerCase(input.inputPlaceholder)"
    />
  </label>
</template>
<style scoped>
label.input-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 45px;
  margin-top: 30px;
  font-size: 1.5rem;
}

label.input-container > span {
  color: var(--font-color-label);
}

label.input-container > input.checkbox {
  height: 20px;
  width: 20px;
}
label.input-container > input.image {
  height: 50px;
  width: 50px;
}
label.input-container > input.text {
  width: 220px;
  height: 45px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid var(--primary-blue);
}

label.input-container > input.text:focus-visible {
  outline: none;
}
</style>

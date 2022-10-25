<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive, ref, toRefs } from "vue";
interface IFormInputProps {
  name: string;
  placeholder: string | undefined;
  value: string | number | Date | boolean;
  type: string;
}
const props = defineProps<IFormInputProps>();
const { name, placeholder, type, value } = toRefs(props);
const inputAttr: IFormInputProps = reactive({
  name: name.value,
  placeholder: useToUpperLowerCase(placeholder.value),
  type: type.value,
  value: value.value,
});

const valueToBeEmitted = ref(inputAttr.value);
const emits = defineEmits(["emittingValue"]);
</script>
<template>
  <label class="input-container">
    <h3>
      {{ inputAttr.placeholder }}
    </h3>
    <input
      :placeholder="inputAttr.placeholder"
      v-model="valueToBeEmitted"
      :type="inputAttr.type"
      @input="
        emits('emittingValue', {
          inputName: inputAttr.name,
          inputValue: valueToBeEmitted,
        })
      "
    />
  </label>
</template>
<style scoped>
label.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: auto;
  margin-top: 30px;
  font-size: 1.5rem;
}
label.input-container > input[type="checkbox" i] {
  height: 20px;
  width: 20px;
}
label.input-container > input[type="image" i] {
  height: 50px;
  width: 50px;
}
label.input-container > input[type="text" i],
label.input-container > input[type="number" i],
label.input-container > input[type="date" i] {
  width: 220px;
  height: 45px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid var(--primary-blue);
}

input[type="text" i]:focus-visible {
  outline: none;
}
</style>

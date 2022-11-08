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
const inputAttrs: IFormInputProps = reactive({
  name: name.value,
  placeholder: useToUpperLowerCase(placeholder.value),
  type: type.value,
  value: value.value,
});

const emits = defineEmits<{
  (
    e: "emittingInputData",
    inputDataToBeEmitted: {
      name: string;
      value: string | number | Date | boolean;
    }
  ): void;
}>();
let labelClass = ref("input-container");
if (inputAttrs.type === "checkbox") labelClass.value = "checkbox-container";
</script>
<template>
  <label :class="labelClass">
    <h3>
      {{ inputAttrs.placeholder }}
    </h3>
    <input
      :placeholder="inputAttrs.placeholder"
      v-model="inputAttrs.value"
      :type="inputAttrs.type"
      @input="
        emits('emittingInputData', {
          name: inputAttrs.name,
          value: inputAttrs.value,
        })
      "
    />
  </label>
</template>
<style scoped>
label.input-container,
label.checkbox-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: auto;
  margin-top: 30px;
  font-size: 1.1rem;
}
label.checkbox-container {
  flex-direction: row;
  align-items: center;
  row-gap: 15px;
  width: 130px;
}
label.checkbox-container > input[type="checkbox" i] {
  display: block;
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

<script setup lang="ts">
import { reactive, toRefs } from "vue";
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
interface ButtonProps {
  name: string;
}
const button = reactive({
  className: "form--button",
});
const props = defineProps<ButtonProps>();
const { name } = toRefs(props);
const buttonAttrs = reactive({
  name: useToUpperLowerCase(name.value),
});
</script>
<template>
  <button :class="button.className">{{ buttonAttrs.name }}</button>
</template>
<style scoped>
button.form--button {
  width: 100px;
  height: 40px;
  margin: 50px auto;
  border-radius: 4px;
  border: 1px solid var(--secondary-blue);
  font-size: 1.1rem;
  background: var(--primary-blue);
  color: var(--font-color-white);
  cursor: pointer;
}
</style>

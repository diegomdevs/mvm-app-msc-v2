<script setup lang="ts">
import { reactive, ref } from "vue";
import FormInput from "./FormInput.vue";
const form = reactive({
  className: "thing-form",
});
const inputs = ref([
  {
    name: "name",
    type: "text",
    placeHolder: "nombre",
  },
]);
</script>

<template>
  <form :class="form.className">
    <FormInput
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeHolder"
      :key="input.name"
    />
  </form>
</template>

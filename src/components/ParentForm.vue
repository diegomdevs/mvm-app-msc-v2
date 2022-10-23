<script setup lang="ts">
import { reactive, ref } from "vue";
import FormInput from "./FormInput.vue";
import CustomerForm from "./CustomerForm.vue";
const form = reactive({
  className: "parent-form",
});
const customerType = "parent";
const inputs = ref([
  {
    name: "isAlive",
    type: "checkbox",
    placeholder: "vive?",
  },
]);
</script>
<template>
  <form :class="form.className">
    <CustomerForm :customer-type="customerType" />
    <FormInput
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeholder"
      :key="input.name"
    />
  </form>
</template>

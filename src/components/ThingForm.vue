<script setup lang="ts">
import { ref } from "vue";
const inputs = ref([
  {
    name: "name",
    type: "text",
    placeHolder: "nombre",
  },
]);
</script>

<template>
  <form class="thing-form">
    <Input
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeHolder"
      :key="input.name"
    />
  </form>
</template>

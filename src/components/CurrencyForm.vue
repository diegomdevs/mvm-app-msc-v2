<script setup lang="ts">
import { reactive } from "vue";
import ThingForm from "./ThingForm.vue";
const form = reactive({
  className: "currency-form",
});
</script>
<template>
  <form :class="form.className"></form>
</template>

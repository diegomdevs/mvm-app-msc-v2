<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { ref, toRefs } from "vue";

interface ILoadingModelProps {
  message: string | undefined;
}
const props = defineProps<ILoadingModelProps>();
const { message } = toRefs(props);
const messageToBeRendered = ref(useToUpperLowerCase(message.value));
</script>
<template>
  <main class="loading-modal-container">
    <h1 class="loading-modal--message">{{ `${messageToBeRendered}...` }}</h1>
  </main>
</template>
<style scoped>
main.loading-modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
main.loading-modal-container > h1.loading-modal--message {
  font-size: 5rem;
}
</style>

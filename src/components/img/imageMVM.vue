<script setup lang="ts">
import { reactive, ref } from "vue";
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import imageMVM from "../../assets/mvm-logo.png";
const image = reactive({
  container: {
    class: "logo-container",
  },
  class: "logo--image",
  source: imageMVM,
  alt: ref(useToUpperLowerCase("logo de MVM")),
});
</script>
<template>
  <picture :class="image.container.class">
    <img :class="image.class" :src="image.source" :alt="image.alt" />
  </picture>
</template>
<style scoped>
picture.logo-container {
  display: block;
  width: 100px;
  height: 100px;
}
picture.logo-container > img.logo--image {
  width: 100%;
  height: 100%;
}
</style>

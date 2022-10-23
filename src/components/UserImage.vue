<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive, toRefs } from "vue";
interface UserImageProps {
  userImageUrl: any;
}
const props = defineProps<UserImageProps>();
const { userImageUrl } = toRefs(props);
const picture = reactive({
  className: "user--photo-container",
});
const img = reactive({
  className: "user--photo",
  url: userImageUrl.value,
  alt: "el usuario no posee foto.",
});
</script>
<template>
  <picture :class="picture.className">
    <img
      :src="img.url"
      :alt="useToUpperLowerCase(img.alt)"
      :class="img.className"
    />
  </picture>
</template>
<style scoped>
picture.user--photo-container {
  display: block;
}
picture.user--photo-container > img.user--photo {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

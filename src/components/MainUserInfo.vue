<script setup lang="ts">
import { reactive } from "vue";
import UserImage from "./UserImage.vue";
import defaultUserPhoto from "../assets/user-photo.png";
const section = reactive({
  className: "main__user-info",
});
const h1 = reactive({
  className: "main__user-info--name",
  message: "Proximamente",
});
const userImage = reactive({
  className: "main__user-info--photo",
  url: defaultUserPhoto,
});
</script>
<template>
  <section :class="section.className">
    <h1 :class="h1.className">{{ h1.message }}</h1>
    <UserImage :user-image-url="userImage.url" :class="userImage.className" />
  </section>
</template>
<style scoped>
section.main__user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  padding: 15px 0;
  border-radius: 10%;
  background-color: var(--primary-blue);
}
section.main__user-info > h1.main__user-info--name {
  font-size: 1.1rem;
  color: var(--font-color-white);
}
section.main__user-info > .main__user-info--photo {
  width: 120px;
  height: 120px;
}
</style>

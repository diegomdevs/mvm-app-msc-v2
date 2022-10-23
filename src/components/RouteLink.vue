<script setup lang="ts">
import useToUpperLowerCase from "@/logic/use-to-upper-lower-case";
import { reactive, toRefs } from "vue";
interface LinkProps {
  linkName: string;
  linkUrl: string;
}
const props = defineProps<LinkProps>();
const { linkName, linkUrl } = toRefs(props);
const section = reactive({
  className: "link-container",
});
const link = reactive({
  className: "link",
});
</script>
<template>
  <section :class="section.className">
    <RouterLink :to="linkUrl" :class="link.className">
      {{ useToUpperLowerCase(linkName) }}
    </RouterLink>
  </section>
</template>
<style scoped>
section.link-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
section.link-container > .link {
  color: var(--font-color-white);
}
</style>

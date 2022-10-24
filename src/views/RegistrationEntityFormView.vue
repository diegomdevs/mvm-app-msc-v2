<script setup lang="ts">
import { defineAsyncComponent, reactive, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const entityForm: any = reactive({
  parent: "../components/ParentForm.vue",
  representative: "../components/RepresentativeForm.vue",
  student: "../components/StudentForm.vue",
});
const formToBeRendered: any = ref(route.params.entityForm);
const formUrlToBeRendered = ref(entityForm[formToBeRendered.value]);
const EntityForm = defineAsyncComponent(
  () => import(formUrlToBeRendered.value)
);
</script>
<template>
  <main>
    <EntityForm />
  </main>
</template>
<style scoped></style>

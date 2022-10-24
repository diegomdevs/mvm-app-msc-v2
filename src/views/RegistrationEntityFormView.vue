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
// const values = ref([
//   { name: "isAlive", value: true },
//   {
//     name: "ci",
//     value: "",
//   },
//   {
//     name: "degreeOfInstruction",
//     value: "",
//   },
//   {
//     name: "middleName",
//     value: "",
//   },
//   {
//     name: "surname",

//     value: "",
//   },
//   {
//     name: "lastName",

//     value: "",
//   },
//   {
//     name: "sex",
//     value: "",
//   },
//   {
//     name: "name",
//     value: "",
//   },
// ]);
// function xd(data: any) {
//   console.log(data);
// }
</script>
<template>
  <main>
    <EntityForm />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
</style>

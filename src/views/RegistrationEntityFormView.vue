<script setup lang="ts">
import api from "@/api/api";
import FormButton from "@/components/FormButton.vue";
import { defineAsyncComponent, reactive, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const entityForm: any = reactive({
  parent: "ParentForm",
  representative: "RepresentativeForm",
  student: "StudentForm",
});
const entityFormTitle: { [key: string]: string } = reactive({
  parent: "padre",
  representative: "representante",
  student: "estudiante",
});

const formToBeRendered: any = ref(route.params.entityForm);
const entityFormTitleToBeRendered = ref(
  entityFormTitle[formToBeRendered.value]
);
const formUrlToBeRendered = ref(entityForm[formToBeRendered.value]);
const EntityForm = defineAsyncComponent(
  () => import(`../components/${formUrlToBeRendered.value}.vue`)
);
const postData: { data: { [key: string]: any } } = reactive({
  data: {
    isAlive: true,
  },
});
const postDataUpdater = (emittedFormData: any) => {
  for (const key in emittedFormData.inputs) {
    postData.data[key] = emittedFormData.inputs[key].value;
    if (postData.data[key].length === 0) delete postData.data[key];
  }
};
const message = ref();
const sendDataAPI = () => {
  message.value = "cargando...";
  api
    .post(formToBeRendered.value + "s", postData.data)
    .then((ok) => {
      console.log(ok.data);
      message.value = "bien";
    })
    .catch((error) => {
      console.log(error.response.data.message);
      message.value = "mal";
    });
};
</script>
<template>
  <main>
    <h1>Datos del {{ entityFormTitleToBeRendered }}</h1>
    <EntityForm
      @emitting-form-data="(emittedFormData: any) => {
        postDataUpdater(emittedFormData);
    }"
    />
    <FormButton @click="sendDataAPI()" name="registrar" />
    {{ postData.data }}
    {{ message }}
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}
</style>

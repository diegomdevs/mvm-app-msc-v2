<!-- <script setup lang="ts">
import { reactive, ref } from "vue";
import FormInput from "./FormInput.vue";
const form = reactive({
  className: "representative-form",
});
const h1 = reactive({
  className: "representative-form--title",
});
const inputs = ref([
  {
    name: "parent-ci",
    type: "text",
    placeholder: "número de cédula",
  },
]);
const buttons = ref({
  name: "número de cédula",
});
</script>
<template>
  <form :class="form.className">
    <h1 :class="h1.className">
      Para registrar un representante necesita el número de cédula de identidad
      de un padre ya registrado en el sistema. Si no está registrado puede
      registrarlo en la
      <RouterLink to=""> sección de registro de padres. </RouterLink>
    </h1>
    <FormInput
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeholder"
      :key="input.name"
    />
  </form>
</template>
<style scoped>
form.representative-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  text-align: center;
  width: 100%;
  height: 100%;
}
form.representative-form > h1.representative-form--title {
  height: auto;
  width: 250px;
  font-size: 1.3rem;
  color: var();
  text-decoration: underline;
}
</style> -->
<script setup lang="ts">
import { ref } from "vue";
import api from "../api/api";
const inputs = ref([
  {
    name: "ci",
    type: "text",
    placeholder: "Cédula de identidad",
    value: "",
  },
]);
let parentData = ref();
let representativeData = ref();
let cargando = ref();
const postCreateRepresentative = () => {
  parentData.value = api
    .get(`parents?ci=${inputs.value[0].value}`)
    .then((response) => {
      if (response.data.length === 0) {
        cargando.value = "error";
        throw new Error();
      }
      representativeData.value = {
        name: response.data[0].name,
        middleName: response.data[0].middleName,
        surname: response.data[0].surname,
        lastName: response.data[0].lastName,
        ci: response.data[0].ci,
        degreeOfInstruction: response.data[0].degreeOfInstruction,
      };
      cargando.value = "listo";
      cargando.value = "cargando";
      api
        .post("representatives", representativeData.value)
        .then((response) => {
          cargando.value = "listo";
        })
        .catch((reject) => {
          console.log(reject);
          cargando.value = "error";
        });
    });
};
</script>
<template>
  <main>
    <h1>
      Para registrar un representante necesita el número de cédula de identidad
      de un padre ya registrado en el sistema. Si no está registrado puede
      registrarlo en la
      <RouterLink to=""> sección de registro de padres. </RouterLink>
    </h1>
    <input
      v-for="input in inputs"
      :type="input.type"
      :placeholder="input.placeholder"
      v-model="input.value"
      :key="input.name"
    />
    <h1 v-if="cargando === 'cargando'" class="cargando">
      {{ "Cargando..." }}
    </h1>
    <h1 v-if="cargando === 'listo'" class="listo">
      {{ "Listo" }}
    </h1>
    <h1 v-if="cargando === 'error'" class="error">
      {{ "Error, verifique los datos y vuelva a intertar." }}
    </h1>
    <button @click.prevent="postCreateRepresentative()">Registrar</button>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
  padding: 15px 0;
}
input[type="text" i],
input[type="date" i] {
  width: 220px;
  height: 45px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid var(--primary-blue);
}
h1 {
  display: block;
  text-align: center;
  width: 300px;
}
h1.cargando {
  color: white;
}
h1.listo {
  color: green;
}
h1.error {
  color: red;
}
button {
  width: 100px;
  height: 40px;
  margin: 50px auto;
  border-radius: 4px;
  border: 1px solid var(--secondary-blue);
  font-size: 1.1rem;
  background: var(--primary-blue);
  color: var(--font-color-white);
  cursor: pointer;
}
</style>

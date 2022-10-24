<!-- <script setup lang="ts">
import { reactive, ref } from "vue";
import CustomerForm from "./CustomerForm.vue";
import FormInput from "./FormInput.vue";
const form = reactive({
  className: "student-form",
});
const customerType = ref("student");
const inputs = ref([
  {
    name: "birthday",
    type: "date",
    placeholder: "fecha de nacimiento",
  },
  {
    name: "birthplace",
    type: "text",
    placeholder: "lugar de nacimiento",
  },
  {
    name: "municipality",
    type: "text",
    placeholder: "municipio",
  },
  {
    name: "state",
    type: "date",
    placeholder: "estado",
  },
  {
    name: "age",
    type: "text",
    placeholder: "edad",
  },
  {
    name: "degreeOfInstruction",
    type: "text",
    placeholder: "grado de instrucción",
  },
  {
    name: "liveWith",
    type: "text",
    placeholder: "vive con",
  },
  {
    name: "allergies",
    type: "text",
    placeholder: "alergias",
  },
]);
</script>
<template>
  <form :class="form.className">
    <CustomerForm :customer-type="customerType" />
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
form.student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
</style> -->
<script setup lang="ts">
import { ref } from "vue";
import api from "../api/api";
const inputs = ref([
  {
    name: "name",
    type: "text",
    placeholder: "Nombre",
    value: "",
  },
  {
    name: "middleName",
    type: "text",
    placeholder: "Segundo Nombre",
    value: "",
  },
  {
    name: "surname",
    type: "text",
    placeholder: "Primer Apellido",
    value: "",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Segundo Apellido",
    value: "",
  },
  {
    name: "ci",
    type: "text",
    placeholder: "Cédula de identidad",
    value: "",
  },
  {
    name: "degreeOfInstruction",
    type: "text",
    placeholder: "Grado de instrucción",
    value: "",
  },
  {
    name: "allergies",
    type: "text",
    placeholder: "Alergias",
    value: "",
  },
  {
    name: "exoneration",
    type: "number",
    placeholder: "Exoneracion",
    value: "",
  },
  {
    name: "liveWith",
    type: "text",
    placeholder: "Vive con",
    value: "",
  },
  {
    name: "age",
    type: "number",
    placeholder: "Edad",
    value: "",
  },
  {
    name: "municipality",
    type: "text",
    placeholder: "Municipalidad",
    value: "",
  },
  {
    name: "birthplace",
    type: "text",
    placeholder: "Lugar de nacimiento",
    value: "",
  },
  {
    name: "birthday",
    type: "date",
    placeholder: "fecha de nacimiento",
    value: "",
  },
]);
let studentData = ref();
let cargando = ref();
const postCreateParent = () => {
  cargando.value = "cargando";
  studentData.value = {
    name: inputs.value[0].value,
    middleName: inputs.value[1].value,
    surname: inputs.value[2].value,
    lastName: inputs.value[3].value,
    ci: inputs.value[4].value,
    degreeOfInstruction: inputs.value[5].value,
    allergies: inputs.value[6].value,
    exoneration: inputs.value[7].value,
    liveWith: inputs.value[8].value,
    age: inputs.value[9].value,
    municipality: inputs.value[10].value,
    birthplace: inputs.value[11].value,
  };
  api
    .post("students", studentData.value)
    .then((response) => {
      cargando.value = "listo";
    })
    .catch((reject) => {
      cargando.value = "error";
    });
};
</script>
<template>
  <main>
    <h1>Datos del estudiante</h1>
    <input
      v-for="input in inputs"
      :type="input.type"
      :placeholder="input.placeholder"
      v-model="input.value"
      :key="input.name"
    />
    <span> Fecha de nacimiento </span>
    <h1 v-if="cargando === 'cargando'" class="cargando">
      {{ "Cargando..." }}
    </h1>
    <h1 v-if="cargando === 'listo'" class="listo">
      {{ "Listo" }}
    </h1>
    <h1 v-if="cargando === 'error'" class="error">
      {{ "Error, verifique los datos y vuelva a intertar." }}
    </h1>
    <button @click.prevent="postCreateParent()">Registrar</button>
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
input {
  width: 220px;
  height: 45px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid var(--primary-blue);
}
h1 {
  text-align: center;
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

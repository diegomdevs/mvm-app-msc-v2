<!-- <script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import FormInput from "./FormInput.vue";
import CustomerForm from "./CustomerForm.vue";
interface IParentFormProps {
  inputValues: any[];
}
const props = defineProps<IParentFormProps>();
const { inputValues } = toRefs(props);

const customerInputValues = ref(
  inputValues.value.filter((input: any) => input.name !== "isAlive")
);
const parentInputValues = ref(
  inputValues.value.filter((input: any) => input.name === "isAlive")
);
console.log(parentInputValues.value);
const form = reactive({
  className: "parent-form",
});
const customerType = "parent";
const parentFormInputs = ref([
  {
    name: "isAlive",
    type: "checkbox",
    placeholder: "vive?",
    value: parentInputValues.value.filter(
      (input: any) => input.name === "isAlive"
    )[0].value,
  },
]);
</script>
<template>
  <form :class="form.className">
    <CustomerForm
      :customer-type="customerType"
      :input-values="customerInputValues"
      v-model="customerInputValues"
    />
    <FormInput
      v-for="input in parentFormInputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeholder"
      :input-value="input.value"
      :key="input.name"
    />
  </form>
</template> -->
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
    name: "isAlive",
    type: "checkbox",
    placeholder: "Vive?",
    value: false,
  },
]);
let parentData = ref();
let cargando = ref();
const postCreateParent = () => {
  cargando.value = "cargando";
  parentData.value = {
    name: inputs.value[0].value,
    middleName: inputs.value[1].value,
    surname: inputs.value[2].value,
    lastName: inputs.value[3].value,
    ci: inputs.value[4].value,
    degreeOfInstruction: inputs.value[5].value,
    isAlive: inputs.value[6].value,
  };
  api
    .post("parents", parentData.value)
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
    <h1>Datos del padre</h1>
    <input
      v-for="input in inputs"
      :type="input.type"
      :placeholder="input.placeholder"
      v-model="input.value"
      :key="input.name"
    />
    <span> Vive? </span>
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
input[type="text" i],
input[type="date" i] {
  width: 220px;
  height: 45px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid var(--primary-blue);
}
input[type="checkbox" i] {
  display: block;
  width: 30px;
  height: 30px;
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

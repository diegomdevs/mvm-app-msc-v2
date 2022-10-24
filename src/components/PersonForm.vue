<script setup lang="ts">
import { ref, toRefs } from "vue";
import ThingForm from "./ThingForm.vue";
import FormInput from "./FormInput.vue";
interface IPersonFormProps {
  inputValues: any[];
}
const props = defineProps<IPersonFormProps>();
const { inputValues } = toRefs(props);

const form = {
  className: "personForm",
};

const thingFormInputsValues = ref(
  inputValues.value.filter((input: any) => input.name === "name")
);
const personFormInputValues = ref(
  inputValues.value.filter((input: any) => input.name !== "name")
);
const personFormInputs = ref([
  {
    name: "middleName",
    type: "text",
    placeHolder: "segundo nombre",
    value: personFormInputValues.value[0].value,
  },
  {
    name: "surname",
    type: "text",
    placeHolder: "primer apellido",
    value: personFormInputValues.value[1].value,
  },
  {
    name: "lastName",
    type: "text",
    placeHolder: "segundo apellido",
    value: personFormInputValues.value[3].value,
  },
  {
    name: "sex",
    type: "text",
    placeHolder: "sexo",
    value: personFormInputValues.value[4].value,
  },
]);
</script>
<template>
  <form :class="form.className">
    <ThingForm
      v-model="thingFormInputsValues"
      :input-values="thingFormInputsValues"
    />
    <FormInput
      v-for="input in personFormInputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeHolder"
      :input-value="input.value"
      v-model="input.value"
      :key="input.name"
    />
  </form>
</template>

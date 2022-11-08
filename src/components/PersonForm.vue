<script setup lang="ts">
import type IInputToBeEmitted from "@/interfaces/IInputToBeEmitted";
import { reactive } from "vue";
import FormInput from "./FormInput.vue";
import ThingForm from "./ThingForm.vue";
const personFormInputs = reactive({
  inputs: {
    middleName: {
      name: "middleName",
      type: "text",
      placeholder: "segundo nombre",
      value: "",
    },
    surname: {
      name: "surname",
      type: "text",
      placeholder: "primer apellido",
      value: "",
    },
    lastName: {
      name: "lastName",
      type: "text",
      placeholder: "segundo apellido",
      value: "",
    },
    sex: {
      name: "sex",
      type: "text",
      placeholder: "sexo",
      value: "",
    },
  },
});
const personFormData: {
  inputs: {
    [key: string]: {
      name: string;
      value: string | number | Date | boolean;
    };
  };
} = reactive({
  inputs: {},
});

const emits = defineEmits<{
  (
    e: "emittingPersonFormData",
    emittedPersonFormData: {
      inputs: {
        [key: string]: {
          [key: string]: any;
          name: string;
          value: string | number | Date | boolean;
        };
      };
    }
  ): void;
}>();
const personFormUpdater = (emittedThingFormData: {
  inputs: {
    [key: string]: {
      [key: string]: any;
      name: string;
      value: string | number | boolean | Date;
    };
  };
}) => {
  for (const key in emittedThingFormData.inputs) {
    personFormData.inputs[key] = emittedThingFormData.inputs[key];
  }
  emits("emittingPersonFormData", personFormData);
};
</script>
<template>
  <form class="person-form">
    <ThingForm
      @emitting-thing-form-data="
        (emittedThingFormData) => {
          personFormUpdater(emittedThingFormData);
        }
      "
    />
    <FormInput
      v-for="personFormInput in personFormInputs.inputs"
      :name="personFormInput.name"
      :placeholder="personFormInput.placeholder"
      :type="personFormInput.type"
      :value="personFormInput.value"
      :key="personFormInput.name"
      @emitting-input-data="
        (emittedInputData) => {
          personFormData.inputs[emittedInputData.name] = emittedInputData;
          emits('emittingPersonFormData', personFormData);
        }
      "
    />
  </form>
</template>
<style scoped>
form.person-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

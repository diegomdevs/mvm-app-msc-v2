<script setup lang="ts">
import { reactive } from "vue";
import CustomerForm from "./CustomerForm.vue";
import FormInput from "./FormInput.vue";

const studentFormInputs = reactive({
  inputs: {
    birthday: {
      name: "birthday",
      type: "date",
      placeholder: "fecha de nacimiento",
      value: new Date(),
    },
    birthplace: {
      name: "birthplace",
      type: "text",
      placeholder: "lugar de nacimiento",
      value: "",
    },
    municipality: {
      name: "municipality",
      type: "text",
      placeholder: "municipio",
      value: "",
    },
    state: {
      name: "state",
      type: "text",
      placeholder: "estado",
      value: "",
    },
    age: {
      name: "age",
      type: "number",
      placeholder: "edad",
      value: 0,
    },
    liveWith: {
      name: "liveWith",
      type: "text",
      placeholder: "vive con",
      value: "",
    },
    allergies: {
      name: "allergies",
      type: "text",
      placeholder: "alergias",
      value: "",
    },
  },
});
const studentFormData: {
  inputs: {
    [key: string]: {
      [key: string]: any;
      name: string;
      value: string | number | boolean | Date;
    };
  };
} = reactive({
  inputs: {},
});

const emits = defineEmits<{
  (
    e: "emittingFormData",
    emittedStudentFormData: {
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
const studentFormDataUpdater = (emittedCustomerFormData: {
  inputs: {
    [key: string]: {
      [key: string]: any;
      name: string;
      value: string | number | boolean | Date;
    };
  };
}) => {
  for (const key in emittedCustomerFormData.inputs) {
    studentFormData.inputs[key] = emittedCustomerFormData.inputs[key];
  }
  emits("emittingFormData", studentFormData);
};
</script>
<template>
  <form class="student-form">
    <CustomerForm
      @emitting-customer-form-data="
        (emittedCustomerFormData) => {
          studentFormDataUpdater(emittedCustomerFormData);
        }
      "
    />
    <FormInput
      v-for="studentFormInput in studentFormInputs.inputs"
      :name="studentFormInput.name"
      :type="studentFormInput.type"
      :placeholder="studentFormInput.placeholder"
      :value="studentFormInput.value"
      :key="studentFormInput.name"
      @emitting-input-data="
        (inputDataEmitted) => {
          studentFormData.inputs[inputDataEmitted.name] = inputDataEmitted;
          emits('emittingFormData', studentFormData);
        }
      "
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
</style>

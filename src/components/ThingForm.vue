<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import FormInput from "./FormInput.vue";
interface IThingFormProps {
  inputValues: any[];
}
const props = defineProps<IThingFormProps>();
const { inputValues } = toRefs(props);
const form = reactive({
  className: "thing-form",
});
const inputs = ref([
  {
    name: "name",
    type: "text",
    placeHolder: "nombre",
    value: inputValues.value[0].value,
  },
]);
</script>

<template>
  <form :class="form.className">
    <FormInput
      v-for="input in inputs"
      :input-name="input.name"
      :input-type="input.type"
      :input-placeholder="input.placeHolder"
      :input-value="input.value"
      v-model="input.value"
      :key="input.name"
    />
  </form>
</template>

<script setup lang="ts"></script>
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

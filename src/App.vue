<template>
  <div id="app">
    <div class="wrapper">
      <h1>Inputs</h1>
      <Input />

      <Input error />

      <Input disabled />

      <Input helperText="Some interesting text" />

      <Input helperText="Some interesting text" error />

      <Input startIcon />

      <Input endIcon />

      <Input value="text" />

      <Input size="sm" />

      <Input size="md" />

      <Input fullWidth />

      <Input multiline row="4" />
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";

export default {
  name: "App",
  components: {
    Input,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@500&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  width: 800px;
  margin: 0 auto;
}
</style>

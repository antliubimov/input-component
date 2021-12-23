<template>
  <div id="app">
    <div class="wrapper">
      <h1>Inputs</h1>

      <div class="row">
        <TextDesc text="<Input />" />
        <Input />
      </div>

      <div class="row">
        <TextDesc text="<Input error />" />
        <Input error />
      </div>

      <div class="row">
        <TextDesc text="<Input disabled />" />
        <Input disabled />
      </div>

      <div class="row">
        <TextDesc text="<Input helperText='Some interesting text' />" />
        <Input helperText="Some interesting text" />
      </div>

      <div class="row">
        <TextDesc text="<Input helperText='Some interesting text' error />" />
        <Input helperText="Some interesting text" error />
      </div>

      <div class="row">
        <TextDesc text="<Input startIcon />" />
        <Input startIcon />
      </div>

      <div class="row">
        <TextDesc text="<Input endIcon />" />
        <Input endIcon />
      </div>

      <div class="row">
        <TextDesc text="<Input value='text' />" />
        <Input value="text" />
      </div>

      <div class="row">
        <TextDesc text="<Input size='sm' />" />
        <Input size="sm" />
      </div>

      <div class="row">
        <TextDesc text="<Input size='md' />" />
        <Input size="md" />
      </div>

      <div class="row">
        <TextDesc text="<Input fullWidth />" />
        <Input fullWidth />
      </div>

      <div class="row">
        <TextDesc text="<Input multiline row='4' />" />
        <Input multiline row="4" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import TextDesc from "@/components/TextDesc";

export default {
  name: "App",
  components: {
    Input,
    TextDesc,
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

.row {
  margin-bottom: 30px;
}
</style>

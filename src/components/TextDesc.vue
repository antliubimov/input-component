<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "TextDesc",
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");

p {
  margin: 0 0 4px 0;
  font-family: "Ubuntu Mono", monospace;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0;
  text-align: left;
}
</style>

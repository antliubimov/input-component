<template>
  <div class="input-wrapper">
    <label :class="['input-label', { 'input-label--error': isError }]">
      {{ label }}
      <textarea
        v-if="isMultiline"
        :class="[
          'input',
          isSize,
          { 'input--error': isError, 'full-width': isFullWidth },
        ]"
        v-model="capitalizeFirstLetter"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :rows="row"
      ></textarea>

      <input
        v-else
        :class="[
          'input',
          isSize,
          { 'input--error': isError, 'full-width': isFullWidth },
        ]"
        :type="type"
        :placeholder="placeholder"
        v-model="capitalizeFirstLetter"
        :disabled="isDisabled"
      />
    </label>
    <p :class="['helper-text', { 'helper-text--error': isError }]">
      {{ helperText }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
    helperText: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      type: "text",
    };
  },
  created() {
    this.isMultiline();
  },
  computed: {
    capitalizeFirstLetter() {
      if (this.value) {
        return this.value.charAt(0).toUpperCase() + this.value.slice(1);
      }
      return "";
    },
    isDisabled() {
      return this.disabled;
    },
    isError() {
      return this.error;
    },
    isFullWidth() {
      return this.fullWidth;
    },
    isSize() {
      if (this.size === "md" || this.size === "") {
        return "input--md";
      } else {
        return "input--sm";
      }
    },
    isMultiline() {
      return this.multiline;
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  font-family: "Noto Sans Display", sans-serif;
  font-style: normal;
  letter-spacing: 0;
  text-align: left;
}

.input-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(51, 51, 51, 1);
}
.input-label:hover {
  color: rgba(51, 51, 51, 1);
}
.input-label:focus-within {
  color: rgba(41, 98, 255, 1);
}

.input {
  display: block;
  width: 200px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid rgba(130, 130, 130, 1);
  border-radius: 8px;
  outline: none;
  color: rgba(51, 51, 51, 1);
}

.input:hover {
  border-color: rgba(51, 51, 51, 1);
}
.input:focus {
  border-color: rgba(41, 98, 255, 1);
}
.input::placeholder {
  color: rgba(130, 130, 130, 1);
}

.input:disabled {
  background-color: rgba(242, 242, 242, 1);
  border-color: rgba(224, 224, 224, 1);
}
.input--sm {
  padding: 10px 12px;
}
.input--md {
  padding: 18px 12px;
}
.full-width {
  width: 100%;
}

.input--error,
.input--error:focus {
  border-color: rgba(211, 47, 47, 1);
}

.input-label--error,
.input-label--error:focus-within,
.helper-text--error {
  color: rgba(211, 47, 47, 1);
}

.helper-text {
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  color: rgba(130, 130, 130, 1);
}

.helper-text:hover {
  color: rgba(130, 130, 130, 1);
}
</style>

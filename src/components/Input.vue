<template>
  <div class="input-wrapper">
    <label
      v-if="isMultiline"
      :class="[
        'input-label',
        {
          'input-label--error': isError,
        },
      ]"
    >
      {{ label }}
      <textarea
        :class="[
          'input',
          isSize,
          {
            'input--error': isError,
            'full-width': isFullWidth,
          },
        ]"
        v-model="capitalizeFirstLetter"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :rows="rowsNumber"
        @input="onInput"
      ></textarea>
    </label>

    <label
      v-else
      :class="[
        'input-label',
        {
          'input-label--error': isError,
        },
      ]"
    >
      {{ label }}
      <input
        :class="[
          'input',
          isSize,
          {
            'input--error': isError,
            'full-width': isFullWidth,
            'input--start-icon': isStartIcon,
            'input--end-icon': isEndIcon,
          },
        ]"
        type="text"
        :placeholder="placeholder"
        v-model="capitalizeFirstLetter"
        :disabled="isDisabled"
      />
      <span v-if="startIcon" class="material-icons md-24 icon start-icon"
        >phone</span
      >
      <span v-if="endIcon" class="material-icons md-24 icon end-icon"
        >lock</span
      >
    </label>
    <p :class="['helper-text', { 'helper-text--error': isError }]">
      {{ helperText }}
    </p>
  </div>
</template>

<script>
import "material-icons/iconfont/material-icons.css";
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
      required: true,
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
      validator: function (value) {
        return ["sm", "md"].indexOf(value) !== -1;
      },
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
      type: String,
      default: "1",
    },
    startIcon: {
      type: Boolean,
      default: false,
    },
    endIcon: {
      type: Boolean,
      default: false,
    },
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
    isStartIcon() {
      return this.startIcon;
    },
    isEndIcon() {
      return this.endIcon;
    },
    rowsNumber() {
      if (!isNaN(parseInt(this.row))) {
        return this.row;
      }
      return "";
    },
    isMultiline() {
      return this.multiline;
    },
  },
  methods: {
    onInput() {
      this.$emit("onInput");
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  position: relative;
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
  box-sizing: border-box;
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
.helper-text {
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  color: rgba(130, 130, 130, 1);
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

.helper-text:hover,
.input-label--error:hover ~ .helper-text {
  color: rgba(130, 130, 130, 1);
}

.input--start-icon {
  padding-left: 45px;
}
.input--end-icon {
  padding-right: 45px;
}

.icon {
  position: absolute;
  top: 38px;
  color: rgba(130, 130, 130, 1);
}

.start-icon {
  left: 11px;
}
.end-icon {
  left: 164px;
}
</style>

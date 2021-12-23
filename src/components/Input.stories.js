import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input @onInput="onInput" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  error: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
};

export const InputWithHelperText = Template.bind({});
InputWithHelperText.args = {
  helperText: "some interesting text",
};

export const ErrorInputWithHelperText = Template.bind({});
ErrorInputWithHelperText.args = {
  helperText: "some interesting text",
  error: true,
};

export const StartIconInput = Template.bind({});
StartIconInput.args = {
  startIcon: true,
};

export const EndIconInput = Template.bind({});
EndIconInput.args = {
  endIcon: true,
};

export const InputWithValue = Template.bind({});
InputWithValue.args = {
  value: "some text",
};

export const SmallSizeInput = Template.bind({});
SmallSizeInput.args = {
  size: "sm",
};
export const MediumSizeInput = Template.bind({});
MediumSizeInput.args = {
  size: "md",
};

export const FullWidthInput = Template.bind({});
FullWidthInput.args = {
  fullWidth: true,
};

export const MultilineInput = Template.bind({});
MultilineInput.args = {
  multiline: true,
  row: "4",
};

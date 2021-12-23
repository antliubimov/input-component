import TextDesc from "./TextDesc";

export default {
  component: "TextDesc",
  title: "Description's Text",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextDesc },
  template: '<TextDesc v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "some interesting text",
};

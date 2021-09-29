import React from "react";

import { Button } from "./Button";

// export default {
//   title: "Example/Button",
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// };

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };

import Button from "./index"; //importing the button component

export default {
  title: "My First Button", //title for our storybook
};

const Template = (arguments_) => <Button {...arguments_} />; //creating a template

export const Primary = Template.bind({});

//Passing the props to the component

Primary.args = {
  size: "h-10 w-56",
  children: "Primary Button",
};

//these arguments will later be the control on the storybook UI and you can change them in the storybook without coming back to the editor.

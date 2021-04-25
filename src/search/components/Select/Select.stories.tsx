import React from "react";
import { Story, Meta } from "@storybook/react";

import { Select, Props } from "./index";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Ejemplo de selector",
  options: [
    { value: "Item 1", name: "Item 1" },
    { value: "Item 2", name: "Item 2" },
    { value: "Item 3", name: "Item 3" },
    { value: "Item 1", name: "Item 4" },
    { value: "Item 2", name: "Item 5" },
    { value: "Item 3", name: "Item 6" },
  ],
  onSelect: () => {},
};

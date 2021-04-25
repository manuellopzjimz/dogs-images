import React from "react";
import { Story, Meta } from "@storybook/react";

import "font-awesome/css/font-awesome.min.css";
import { Loading } from "./index";

export default {
  title: "Components/Loading",
  component: Loading,
} as Meta;

const Template: Story = () => <Loading />;

export const Primary = Template.bind({});

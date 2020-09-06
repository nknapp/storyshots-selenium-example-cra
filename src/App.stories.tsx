import App from "./App";
import React from "react";
import {Story} from "@storybook/react";

export default {
  title: "App",
};

export const Default: Story = () => <App />;

Default.parameters= {
  storyshotSelenium: {
    sizes: ["1024x768", "800x600", "360x480"]
  }
}

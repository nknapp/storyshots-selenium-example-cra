import {action} from "@storybook/addon-actions";
import React from "react";

export default {
  title: "buttons",
};

export const SimpleButton = () => <button onClick={action('click')}>simple button</button>;

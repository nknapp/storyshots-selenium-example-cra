import { Logo } from "./index";
import React from "react";

export default {
  title: "components/Logo",
};

export const DefaultSize = (): JSX.Element => {
  return (
    <div>
      <Logo />
    </div>
  );
};

export const Smaller = (): JSX.Element => {
  return (
    <div>
      <Logo style={{ width: "2rem", height: "2rem" }} />
    </div>
  );
};

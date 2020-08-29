import { Logo } from "./index";
import React from "react";

export default {
  title: "components/Logo",
};

export const DefaultSize = (): JSX.Element => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Logo />
    </div>
  );
};

export const Smaller = (): JSX.Element => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Logo style={{ width: "2rem", height: "2rem" }} />
    </div>
  );
};

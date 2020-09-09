import { Layout } from "./Layout";
import styled from "styled-components";
import React from "react";

export default {
  title: "layout/Layout",
  parameters: {
    layout: "fullscreen",
  },
};

const StPlaceholderContainer = styled.div`
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const PlaceHolder: React.FC<{ color: string; text: string }> = ({
  color,
  text,
}) => (
  <StPlaceholderContainer>
    {text}
  </StPlaceholderContainer>
);

export const DefaultLayout = () => (
  <Layout
    navigation={<PlaceHolder color="#7777ff" text="navigation" />}
    sidebar={<PlaceHolder color="#77ff77" text="sidebar" />}
    content={<img src={"http://placekitten.com/300/300"} />}
  />
);

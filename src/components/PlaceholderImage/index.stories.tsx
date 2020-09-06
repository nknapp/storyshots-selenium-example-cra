import { placeholderImage } from "./index";
import React from "react";
import styled from "styled-components";
import { Story } from "@storybook/react";

export default {
  title: "components/PlaceholderImage",
};

export const Default = (): JSX.Element => {
  return (
    <div>
      <img src={placeholderImage("300x200", "text")} />
    </div>
  );
};

export const Small = (): JSX.Element => {
  return (
    <div>
      <img src={placeholderImage("50x50", "text")} />
    </div>
  );
};

export const LongText = (): JSX.Element => {
  return (
    <div>
      <img
        src={placeholderImage(
          "200x50",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        )}
      />
    </div>
  );
};

export const Red = (): JSX.Element => {
  return (
    <div>
      <img src={placeholderImage("50x50", "text", "red")} />
    </div>
  );
};

const StCenteredBoundedWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: lightgrey;
`;

const StInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StCenteredImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ScaledAndCenteredLandscape = (): JSX.Element => {
  return (
    <div style={{ width: "200px" }}>
      <StCenteredBoundedWrapper>
        <StInnerWrapper>
          <StCenteredImage src={placeholderImage("300x200", "text")} />
        </StInnerWrapper>
      </StCenteredBoundedWrapper>
    </div>
  );
};

export const ScaledAndCenteredPortrait = (): JSX.Element => {
  return (
    <div style={{ width: "200px" }}>
      <StCenteredBoundedWrapper>
        <StInnerWrapper>
          <StCenteredImage src={placeholderImage("100x200", "text")} />
        </StInnerWrapper>
      </StCenteredBoundedWrapper>
    </div>
  );
};

const StBackgroundContainer = styled.div`
    width: 100%;
    height: 5rem;
    background-image: url('${placeholderImage("400x100", "background")}');
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
    background-color: #eee;
`;

export const BackgroundImageCover: Story = () => {
  return <StBackgroundContainer />;
};

BackgroundImageCover.parameters = {
    storyshotSelenium: {
        sizes: ["1024x768", "800x600", "360x480"]
    }
}

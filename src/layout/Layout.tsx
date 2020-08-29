import { ReactNode, useState } from "react";
import styled from "styled-components";
import React from "react";

const StContainer = styled.div`
  position: absolute;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  
  width: 100%;
  grid-template-columns: 20% 1fr 3rem;
  grid-template-rows: 3rem 1fr;
  display: grid;
  grid-template-areas: 
    "navigation navigation navigation"
    "sidebar content content";
  
  @media only screen and (max-width: 600px) {
    grid-template-areas: 
    "navigation navigation menu"
    "content content content";
  }
}
`;

const StNavigation = styled.div`
  grid-area: navigation;
  background-color: #ccc;
  padding: 0.5rem;
`;

const StSidebar = styled.div`
  grid-area: sidebar;
  border-right: 1px dashed black;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StContent = styled.div`
  grid-area: content;
  padding: 0.5rem;
`;

const StMenu = styled.div`
  background-color: #747;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    display: block;
    grid-area: menu;
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

const StMobileSidebar = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    border-bottom: 1px dashed black;
    padding: 1rem;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const Layout: React.FC<{
  navigation: ReactNode;
  sidebar: ReactNode;
  content: ReactNode;
}> = ({ navigation, sidebar, content }) => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  return (
    <StContainer>
      <StNavigation>{navigation}</StNavigation>
      <StMenu onClick={() => setShowMobileSidebar(!showMobileSidebar)}>
        X
      </StMenu>
      <StSidebar>{sidebar}</StSidebar>
      <StContent>
        {showMobileSidebar ? (
          <StMobileSidebar>{sidebar}</StMobileSidebar>
        ) : null}
        {content}
      </StContent>
    </StContainer>
  );
};

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
  grid-template-columns: 20% 1fr 3rem;
  grid-template-rows: 3rem auto 1fr;
    grid-template-areas: 
    "navigation navigation menu"
    "mobile-sidebar mobile-sidebar mobile-sidebar"
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
    grid-area: mobile-sidebar;
    display: block;
    margin-bottom: 1rem;
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
      {showMobileSidebar ? <StMobileSidebar>{sidebar}</StMobileSidebar> : null}
      <StContent>{content}</StContent>
    </StContainer>
  );
};

import React from "react";
import styled from "styled-components";

const StUl = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
`;

const StLi = styled.li`
  margin: 0;
  padding: 0.5rem;
  background: rgb(254, 255, 76);
  background: radial-gradient(
    circle,
    rgba(254, 255, 76, 1) 0%,
    rgba(255, 188, 188, 1) 80%,
    rgba(255, 188, 188, 1) 100%
  );
  border-bottom: 1px solid #fff;
  display: block;
`;

export const Sidebar: React.FC = () => {
  const items = [
    { label: "Lorem" },
    { label: "ipsum" },
    { label: "dolor" },
    { label: "sit" },
  ];

  return (
    <StUl>
      {items.map((item, index) => {
        return <StLi key={index}>{item.label}</StLi>;
      })}
    </StUl>
  );
};

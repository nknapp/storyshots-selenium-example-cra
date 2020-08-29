import React, { CSSProperties } from "react";

export const Logo: React.FC<{ className?: string; style?: CSSProperties }> = ({
  className,
  style,
}) => {
  const { primary, background } = {
    background: "white",
    primary: "#505",
  };
  return (
    <svg width={50} height={50} className={className} style={style}>
      <rect
        x={0}
        y={0}
        height={"100%"}
        width={"100%"}
        rx={"10%"}
        ry={"10%"}
        fill={primary}
        strokeWidth={0}
      />
      <rect
        x={"10%"}
        y={"10%"}
        height={"80%"}
        width={"80%"}
        rx={"10%"}
        ry={"10%"}
        strokeWidth={0}
        fill={background}
      />
      <rect
        x={"20%"}
        y={"32%"}
        height={"36%"}
        width={"60%"}
        rx={"2%"}
        ry={"2%"}
        stroke={primary}
      />
      <rect
        x={"24%"}
        y={"28%"}
        height={"4%"}
        width={"8%"}
        rx={0}
        ry={0}
        fill={primary}
        strokeWidth={0}
      />
      <circle
        cx={"50%"}
        cy={"50%"}
        r={"20%"}
        stroke={primary}
        fill={background}
        className={"lens"}
      />
      <circle
        cx={"50%"}
        cy={"50%"}
        r={"16%"}
        stroke={primary}
        fill={background}
        className={"lens"}
      />
    </svg>
  );
};

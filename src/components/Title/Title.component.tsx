import React from "react";
import { Header } from "shared/types/Header.type";
import { TitleWrapper } from "./Title.ui";
import { Breakpoint } from "shared/types/Breakpoints.type";

type TitleProps = {
  as: Header;
  children: React.ReactNode;
  size: Breakpoint<number>;
  color?: string;
  spread?: boolean;
};

export const Title = (props: TitleProps) => {
  const { as, children, color, size, spread } = props;
  return (
    <TitleWrapper as={as} color={color} size={size} spread={spread}>
      {children}
    </TitleWrapper>
  );
};

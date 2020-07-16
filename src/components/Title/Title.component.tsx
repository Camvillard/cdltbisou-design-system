import React from "react";
import { Header } from "shared/types/Header.type";
import { TitleWrapper } from "./Title.ui";
import { Breakpoint } from "shared/types/Breakpoints.type";

type TitleProps = {
  as: Header;
  children: React.ReactNode;
  size: Breakpoint<number>;
  color?: string;
};

export const Title = (props: TitleProps) => {
  const { as, children, color, size } = props;
  return (
    <TitleWrapper as={as} color={color} size={size}>
      {children}
    </TitleWrapper>
  );
};

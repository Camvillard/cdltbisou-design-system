import React from "react";
import { ButtonWrapper } from "./Button.ui";

type ButtonProps = {
  children: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
  const { children } = props;
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

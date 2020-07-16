import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { Title } from "./Title.component";
import { themeColors } from "theme/theme";
import { Header } from "shared/types/Header.type";
import { Breakpoint } from "shared/types/Breakpoints.type";

const { darkGray } = themeColors;

export default {
  title: "Title",
  component: Title,
  decorators: [withKnobs],
};

const titleSizes: Breakpoint<number> = {
  default: 3.2,
  xsm: 3.8,
  sm: 4,
  lg: 4.8,
};

export const MainTitle = () => {
  return (
    <Title as={"h1"} color={darkGray} size={titleSizes}>
      main title
    </Title>
  );
};

export const SpreadTitle = () => {
  return (
    <Title
      as={"h1"}
      color={darkGray}
      size={titleSizes}
      spread={boolean("spread", false, "GROUP-ID1")}
    >
      main title
    </Title>
  );
};

const headerLabel = "Headers";
const headersOptions = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};
const defaultValue = "h1";
const groupdId = "GROUP-ID1";

export const TitleWithKnobs = () => (
  <Title
    as={select(headerLabel, headersOptions, defaultValue, groupdId) as Header}
    size={titleSizes}
  >
    this is the title
  </Title>
);

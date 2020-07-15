import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "../src/theme/global-styles";

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
));

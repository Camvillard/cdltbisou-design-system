import React from "react";
// import { action } from "@storybook/addon-actions";
import { Button } from "./Button.component";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => <Button>coucou</Button>;

// export const Emoji = () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

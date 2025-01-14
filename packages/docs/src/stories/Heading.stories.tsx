import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@carrara-art-kit-ui/react";

// PADRÃO //
export default {
  title: "Typegraphy/Heading",
  component: Heading,
  args: {
    children: "Custom Title",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`",
      },
    },
  },
};

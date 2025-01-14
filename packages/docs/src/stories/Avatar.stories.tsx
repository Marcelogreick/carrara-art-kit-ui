import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@carrara-art-kit-ui/react";

// PADRÃO //
export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/rogerrm95.png",
    alt: "Rogério Marques",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

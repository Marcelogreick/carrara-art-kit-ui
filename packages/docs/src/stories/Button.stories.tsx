import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@carrara-art-kit-ui/react";
import { ArrowRight } from "phosphor-react";

// PADRÃO //
export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

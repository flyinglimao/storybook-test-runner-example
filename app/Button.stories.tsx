import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await window.takeSnapshot?.();
    await window.takeScreenshot?.();

    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenLastCalledWith(1);

    await window.takeSnapshot?.();
    await window.takeScreenshot?.();
  },
};

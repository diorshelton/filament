import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Filament/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "info", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Each named export is a story
export const Primary: Story = {
  args: {
    children: "Publish tokens",
    variant: "primary",
    size: "md",
    disabled: false,
    asChild: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Publish tokens",
    variant: "secondary",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "Publish tokens",
    variant: "danger",
    size: "md",
  },
};

export const Info: Story = {
  args: {
    children: "Publish tokens",
    variant: "info",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Publish tokens",
    variant: "ghost",
    size: "md",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

export const AsLink: Story = {
  render: () => (
    <Button variant="primary" size="md" asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </Button>
  ),
};

export const AsLinkGhost: Story = {
  render: () => (
    <Button variant="ghost" size="sm" asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </Button>
  ),
};

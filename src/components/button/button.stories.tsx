import type { Meta, StoryObj } from '@storybook/react';

import UserIcon from '../../assets/imagesData/UserIcon';

import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'icons'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    boxShadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    loading: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Button (Primary, Medium)
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    boxShadow: 'lg',
    borderRadius: 'lg',
    children: 'Default Button',
  },
};

// Secondary Variant Button (Medium)
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    boxShadow: 'md',
    borderRadius: 'lg',
    children: 'Secondary Button',
  },
};

// Small Size Button (Primary)
export const Small: Story = {
  args: {
    size: 'small',
    variant: 'primary',
    children: 'Small Size',
  },
};

// Medium Size Button (Primary)
export const Medium: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    children: 'Medium Size',
  },
};

// Large Size Button (Secondary)
export const Large: Story = {
  args: {
    size: 'large',
    variant: 'secondary',
    children: 'Large Size',
  },
};

// Button with Icon (Secondary)
export const WithIcon: Story = {
  args: {
    icon: <UserIcon />,
    size: 'medium',
    variant: 'secondary',
    children: 'Button with Icon',
  },
};

// Button with Loader (Primary, Medium)
export const WithLoader: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    loading: true,
    children: 'Loading...',
  },
};

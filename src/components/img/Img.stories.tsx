// Img.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Img, { ImgProps } from './Img';

export default {
  title: 'Img',
  component: Img,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'dhani.png',
  alt: 'Placeholder image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'dhani.png',
  alt: 'Placeholder image',
  disabled: true,
};

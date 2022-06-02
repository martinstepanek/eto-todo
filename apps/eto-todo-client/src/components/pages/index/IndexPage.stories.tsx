import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IndexPage from './IndexPage';

export default {
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => (
  <IndexPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

import { Meta, Story } from '@storybook/react/types-6-0';

import { Header } from './Header';

export default {
  title: 'Templates / Header',
  component: Header,
} as Meta;

const Template: Story = args => <Header {...args} />;

export const HeaderDefault = Template.bind({});

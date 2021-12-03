import { Args, Meta, Story } from '@storybook/react/types-6-0';

import { Button, ButtonProps, ButtonType } from './Button';
import styles from './Button.module.scss';

export default {
  title: 'Atoms / Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <div className={styles.storyContainer}>
    <Button {...args} />
  </div>
);

export const DefaultButton = Template.bind({});

export const SuccessButton = Template.bind({});

export const InfoButton = Template.bind({});

export const LinkButton = Template.bind({});

DefaultButton.args = {
  type: ButtonType.Default,
  label: 'Sign Up',
} as Args;

SuccessButton.args = {
  type: ButtonType.Success,
  label: 'Create an account',
} as Args;

InfoButton.args = {
  type: ButtonType.Info,
  label: 'Create an account',
} as Args;

LinkButton.args = {
  type: ButtonType.Link,
  label: 'Create an account',
} as Args;

import { Args, Meta, Story } from '@storybook/react/types-6-0';

import { Social, SocialProps, SocialType } from './Social';
import styles from './Social.module.scss';

export default {
  title: 'Atoms / Social',
  component: Social,
} as Meta;

const Template: Story<SocialProps> = args => (
  <div
    className={
      args.type === SocialType.Default
        ? styles.storyContainer
        : styles.storyContainerLight
    }
  >
    <Social {...args} />
  </div>
);

export const SocialDefault = Template.bind({});

export const SocialSecondary = Template.bind({});

SocialDefault.args = {
  type: SocialType.Default,
} as Args;

SocialSecondary.args = {
  type: SocialType.Secondary,
} as Args;

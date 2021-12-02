import { Args, Meta, Story } from '@storybook/react/types-6-0';

import { Contact, ContactProps, ContactType } from './Contact';
import styles from './Contact.module.scss';

export default {
  title: 'Atoms / Contact',
  component: Contact,
} as Meta;

const Template: Story<ContactProps> = args => (
  <div className={styles.storyContainer}>
    <Contact {...args} />
  </div>
);

export const ContactRow = Template.bind({});

export const ContactColumn = Template.bind({});

ContactRow.args = {
  type: ContactType.Row,
} as Args;

ContactColumn.args = {
  type: ContactType.Column,
} as Args;

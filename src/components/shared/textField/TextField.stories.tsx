import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsCardText } from 'react-icons/bs';

import { TextField, TextFieldProps } from './TextField';
import styles from './TextField.module.scss';

export default {
  title: 'Atoms / TextField',
  component: TextField,
} as Meta;

export const TextFieldDefault: Story<TextFieldProps> = args => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      placeholder="enter name"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const TextFieldWithIcon: Story<TextFieldProps> = args => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      placeholder="enter name"
      value={value}
      icon={<BsCardText />}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const TextFieldWithIconHighlight: Story<TextFieldProps> = args => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      placeholder="enter name"
      value={value}
      icon={<BsCardText />}
      highlightIcon={true}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const TextFieldError: Story<TextFieldProps> = args => {
  const [value, setValue] = useState('');

  return (
    <TextField
      {...args}
      placeholder="enter name"
      value={value}
      icon={<BsCardText />}
      error={true}
      onChange={e => setValue(e.target.value)}
    />
  );
};

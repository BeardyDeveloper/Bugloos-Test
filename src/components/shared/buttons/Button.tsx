import { FC } from 'react';

import styles from './Button.module.scss';

export enum ButtonType {
  Default,
  Success,
  Info,
  Link,
}

export interface ButtonProps {
  type?: ButtonType;
  label: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = props => {
  const { type, label } = props;

  const buttonStyle = () => {
    switch (type) {
      case ButtonType.Default:
        return styles.defaultButton;
      case ButtonType.Success:
        return styles.successButton;
      case ButtonType.Info:
        return styles.infoButton;
      case ButtonType.Link:
        return styles.linkButton;

      default:
        return styles.defaultButton;
    }
  };

  return (
    <div className={[styles.button, buttonStyle()].join(' ')}>{label}</div>
  );
};

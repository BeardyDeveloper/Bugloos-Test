import { FC } from 'react';

import { Spinner } from '../spinner/Spinner';
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
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = props => {
  const { type, label, disabled, loading, onClick } = props;

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
    <button
      type="button"
      disabled={disabled}
      className={[styles.button, buttonStyle()].join(' ')}
      onClick={!disabled || !loading ? onClick : undefined}
    >
      {loading ? <Spinner /> : label}
    </button>
  );
};

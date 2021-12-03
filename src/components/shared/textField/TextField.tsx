import { FC, ReactElement } from 'react';

import styles from './TextField.module.scss';

export interface TextFieldProps {
  type: string;
  name?: string;
  textInputRef?: any;
  placeholder?: string;
  value?: string;
  icon?: ReactElement;
  highlightIcon?: boolean;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: any) => void;
  onIconClick?: (value: any) => void;
}

export const TextField: FC<TextFieldProps> = props => {
  const {
    type,
    name,
    textInputRef,
    placeholder,
    icon,
    highlightIcon,
    error,
    disabled,
    value,
    className,
    onChange,
    onIconClick,
  } = props;

  const textFieldClassName = () => {
    if (error) {
      return styles.textFieldError;
    } else {
      return styles.textFieldDefault;
    }
  };

  return (
    <div className={[textFieldClassName(), className].join(' ')}>
      <input
        className={styles.input}
        name={name}
        ref={textInputRef}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {icon && (
        <div
          className={highlightIcon ? styles.highlightIcon : styles.icon}
          onClick={onIconClick}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

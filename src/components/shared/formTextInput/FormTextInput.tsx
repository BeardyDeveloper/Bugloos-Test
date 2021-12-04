import { TextField } from 'components/shared/textField/TextField';
import { FC, ReactElement } from 'react';
import { useFormContext, ValidationRule } from 'react-hook-form';

interface LengthValidate {
  value: number;
  message: string;
}

export interface FormTextInputProps {
  type: string;
  name: string;
  required?: string;
  error?: boolean;
  min?: number;
  max?: number;
  minLength?: LengthValidate;
  maxLength?: LengthValidate;
  validate?: any;
  pattern?: ValidationRule<RegExp>;
  placeholder?: string;
  icon?: ReactElement;
  onIconClick?: (args?: any) => void;
  className?: string;
}

export const FormTextInput: FC<FormTextInputProps> = props => {
  const {
    name,
    placeholder,
    required,
    error,
    min,
    max,
    minLength,
    maxLength,
    validate,
    pattern,
    type,
    icon,
    className,
    onIconClick,
  } = props;

  const { register } = useFormContext();

  // register input validations
  const {
    name: registerName,
    ref,
    onChange,
  } = register(name, {
    required,
    min,
    max,
    minLength,
    maxLength,
    validate,
    pattern,
  });

  return (
    <TextField
      type={type}
      icon={icon}
      placeholder={placeholder}
      name={registerName}
      error={error}
      textInputRef={ref}
      onChange={onChange}
      onIconClick={onIconClick}
      className={className}
    />
  );
};

export default FormTextInput;

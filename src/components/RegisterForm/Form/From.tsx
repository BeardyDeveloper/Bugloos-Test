import { Button, ButtonType } from 'components/shared/buttons/Button';
import { FormTextInput } from 'components/shared/formTextInput/FormTextInput';
import { FC, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FiEye } from 'react-icons/fi';

import styles from './Form.module.scss';

export interface FormProps {
  loading?: boolean;
  onSubmit: (data: any) => void;
}

export const Form: FC<FormProps> = props => {
  const { loading, onSubmit } = props;

  const formRef = useRef<HTMLFormElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfiemPassword] =
    useState<boolean>(false);

  const methods = useForm();

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div className={styles.formContainer}>
      <FormProvider {...methods}>
        <form ref={formRef} className={styles.form}>
          <div className={styles.inputContainer}>
            <FormTextInput
              required="this is required"
              minLength={{
                value: 3,
                message: 'input must have at least 3 characters',
              }}
              type="text"
              name="username"
              placeholder="Name"
              error={errors.username}
            />
            {errors.username && (
              <div className={styles.errorMessage}>
                {errors.username.message}
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <FormTextInput
              required="this is required"
              minLength={{
                value: 3,
                message: 'input must have at least 3 characters',
              }}
              pattern={{
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'email format dose not correct',
              }}
              type="text"
              name="email"
              placeholder="Email"
              error={errors.email}
            />
            {errors.email && (
              <div className={styles.errorMessage}>{errors.email.message}</div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <FormTextInput
              name="password"
              type={showPassword ? 'text' : 'password'}
              required="this is required"
              minLength={{
                value: 3,
                message: 'input must have at least 3 characters',
              }}
              placeholder="Password"
              icon={<FiEye />}
              error={errors.password}
              onIconClick={() => setShowPassword(prev => !prev)}
            />
            {errors.password && (
              <div className={styles.errorMessage}>
                {errors.password.message}
              </div>
            )}
          </div>
          <div className={styles.inputContainer}>
            <FormTextInput
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required="this is required"
              validate={(value: string) =>
                value === watch('password') || "Passwords don't match."
              }
              placeholder="Confirm Password"
              icon={<FiEye />}
              error={errors.confirmPassword}
              onIconClick={() => setShowConfiemPassword(prev => !prev)}
            />
            {errors.confirmPassword && (
              <div className={styles.errorMessage}>
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
          <div className={[styles.buttonContainer, styles.marginTop].join(' ')}>
            <Button
              label="Create an account"
              type={ButtonType.Success}
              loading={loading}
              onClick={handleSubmit(data => onSubmit(data))}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button label="Sihn up with Google" type={ButtonType.Info} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

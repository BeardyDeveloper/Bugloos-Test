import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegistrationHeader } from 'components/RegistrationHeader/RegistrationHeader';
import { FC } from 'react';

import styles from './RegisterPage.module.scss';

export const RegisterPage: FC = () => {
  return (
    <>
      <RegistrationHeader />
      <div className={styles.registerSection}>
        <RegisterForm />
      </div>
    </>
  );
};

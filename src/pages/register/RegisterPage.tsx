import { MobileDownload } from 'components/MobileDownload/MobileDownload';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegistrationHeader } from 'components/RegistrationHeader/RegistrationHeader';
import { PageTemplate } from 'layout/PageTemplate';
import { FC } from 'react';

import styles from './RegisterPage.module.scss';

export const RegisterPage: FC = () => {
  return (
    <PageTemplate>
      <RegistrationHeader />
      <div className={styles.registerSection}>
        <RegisterForm />
      </div>
      <MobileDownload />
    </PageTemplate>
  );
};
